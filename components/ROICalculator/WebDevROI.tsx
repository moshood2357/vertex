"use client";

import { useState } from "react";
import Head from "next/head";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import jsPDF from "jspdf";
import Header from "../Heading";

/* ================= TYPES ================= */

type FormData = {
  companyName: string;
  monthlyVisitors: string;
  currentConversionRate: string;
  avgOrderValue: string;
  expectedConversionIncrease: string;
  projectCost: string;
  timeline: string;
  currency: string;
};

type Results = {
  currentRevenue: string;
  projectedRevenue: string;
  additionalRevenue: string;
  roiPercentage: string;
  timelineApplied: string;
};

/* ================= FIELDS ================= */

const fields: {
  label: string;
  name: keyof FormData;
  placeholder: string;
  tooltip: string;
}[] = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "ABC Ltd",
    tooltip: "Your business or brand name.",
  },
  {
    label: "Monthly Visitors",
    name: "monthlyVisitors",
    placeholder: "5000",
    tooltip: "Total monthly traffic.",
  },
  {
    label: "Current Conversion Rate (%)",
    name: "currentConversionRate",
    placeholder: "2",
    tooltip: "Percentage of visitors converting.",
  },
  {
    label: "Average Order Value",
    name: "avgOrderValue",
    placeholder: "50",
    tooltip: "Average revenue per customer.",
  },
  {
    label: "Expected Conversion Increase (%)",
    name: "expectedConversionIncrease",
    placeholder: "1.5",
    tooltip: "Expected improvement (max 5%).",
  },
  {
    label: "Project Cost",
    name: "projectCost",
    placeholder: "3000",
    tooltip: "Total project cost.",
  },
  {
    label: "Timeline (Years)",
    name: "timeline",
    placeholder: "2",
    tooltip: "ROI period.",
  },
];

/* ================= CURRENCY ================= */

const currencySymbols: Record<string, string> = {
  GBP: "£",
  USD: "$",
  EUR: "€",
  NGN: "₦",
};

/* ================= COMPONENT ================= */

export default function WebsiteDevelopmentROICalculator() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    monthlyVisitors: "",
    currentConversionRate: "",
    avgOrderValue: "",
    expectedConversionIncrease: "",
    projectCost: "",
    timeline: "",
    currency: "GBP",
  });

  const [results, setResults] = useState<Results | null>(null);
  const [calculating, setCalculating] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [locked, setLocked] = useState(false);

  const [reportCompanyName, setReportCompanyName] = useState("");

  /* ================= FORMAT (UI) ================= */

  const formatCurrency = (value: string) => {
    const num = Number(value).toLocaleString();
    const symbol = currencySymbols[formData.currency] || "";
    return `${symbol}${num}`;
  };

  /* ================= FORMAT (PDF SAFE) ================= */

  const formatCurrencyPDF = (value: string) => {
    const num = Number(value).toLocaleString();

    switch (formData.currency) {
      case "USD":
        return `USD ${num}`;
      case "GBP":
        return `GBP ${num}`;
      case "EUR":
        return `EUR ${num}`;
      case "NGN":
        return `NGN ${num}`;
      default:
        return num;
    }
  };

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ================= ROI CALCULATION ================= */

  const calculateROI = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);

    setReportCompanyName(formData.companyName);

    const visitors = parseFloat(formData.monthlyVisitors) || 0;
    const conversion = (parseFloat(formData.currentConversionRate) || 0) / 100;
    const avgOrder = parseFloat(formData.avgOrderValue) || 0;

    let increase = (parseFloat(formData.expectedConversionIncrease) || 0) / 100;
    if (increase > 0.05) increase = 0.05;

    const cost = parseFloat(formData.projectCost) || 0;
    const timeline = parseInt(formData.timeline) || 1;

    const profitMargin = 0.6;

    const currentMonthly = visitors * conversion * avgOrder;
    const projectedMonthly = visitors * (conversion + increase) * avgOrder;

    const currentYearly = currentMonthly * 12 * profitMargin;
    const projectedYearly = projectedMonthly * 12 * profitMargin;

    const additionalProfit = projectedYearly - currentYearly;
    const totalProfit = additionalProfit * timeline;

    const roi = cost > 0 ? totalProfit / cost : 0;

    setTimeout(() => {
      setResults({
        currentRevenue: currentYearly.toFixed(2),
        projectedRevenue: projectedYearly.toFixed(2),
        additionalRevenue: additionalProfit.toFixed(2),
        roiPercentage: roi.toFixed(1),
        timelineApplied: timeline.toString(),
      });

      setCalculating(false);
      setLocked(true);

      setFormData({
        companyName: "",
        monthlyVisitors: "",
        currentConversionRate: "",
        avgOrderValue: "",
        expectedConversionIncrease: "",
        projectCost: "",
        timeline: "",
        currency: formData.currency,
      });
    }, 600);
  };

  /* ================= PDF ================= */

  const downloadPDF = async () => {
    if (!results) return;

    try {
      setPdfLoading(true);

      const pdf = new jsPDF("p", "pt", "a4");

      const margin = 40;
      const pageHeight = pdf.internal.pageSize.getHeight();

      let y = 50;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.text("Vertex Prime Digital", margin, y);

      y += 22;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      pdf.text("Website Design & Development ROI Report", margin, y);

      y += 25;

      pdf.setFontSize(10);
      pdf.text(`Company: ${reportCompanyName || "N/A"}`, margin, y);

      y += 15;

      const now = new Date();
      pdf.text(`Generated (Local): ${now.toLocaleString()}`, margin, y);

      y += 15;
      pdf.text(`Generated (UTC): ${now.toISOString()}`, margin, y);

      y += 20;
      pdf.line(margin, y, 550, y);

      y += 30;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text("RESULTS", margin, y);

      y += 20;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);

      pdf.text(
        `Current Revenue: ${formatCurrencyPDF(results.currentRevenue)}`,
        margin,
        y,
      );
      y += 16;

      pdf.text(
        `Projected Revenue: ${formatCurrencyPDF(results.projectedRevenue)}`,
        margin,
        y,
      );
      y += 16;

      pdf.text(
        `Additional Revenue: ${formatCurrencyPDF(results.additionalRevenue)}`,
        margin,
        y,
      );
      y += 16;

      pdf.text(`ROI: ${results.roiPercentage}%`, margin, y);

      const footerY = pageHeight - 50;

      pdf.setFontSize(9);
      pdf.setTextColor(120);
      pdf.text("Call/WhatsApp: +2349038979339", margin, footerY);

      pdf.setTextColor(0, 0, 255);
      pdf.textWithLink("Visit: vertexprimedigital.com", margin, footerY + 12, {
        url: "https://www.vertexprimedigital.com",
      });

      pdf.textWithLink("Book Free Consultation", margin, footerY + 26, {
        url: "https://vertexprimedigital.com/website-design-and-development",
      });

      pdf.save("roi-report.pdf");
    } catch (err) {
      console.error("PDF ERROR:", err);
      alert("Failed to generate PDF");
    } finally {
      setPdfLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <>
      <Head>
        <title>Website ROI Calculator</title>
      </Head>


      <Header />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-32">
        <Card className="w-full max-w-xl">
          <CardContent className="p-6 space-y-5">
            <h1 className="text-2xl font-bold text-center">
              Website ROI Calculator
            </h1>

            <form onSubmit={calculateROI} className="space-y-4">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                disabled={locked}
                className="w-full border p-2 rounded"
              >
                <option value="GBP">GBP (£)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="NGN">NGN (₦)</option>
              </select>

              {fields.map((f) => (
                <div key={f.name} className="relative group">
                  <input
                    name={f.name}
                    value={formData[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    disabled={locked}
                    className="w-full border p-2 rounded"
                  />

                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-3 py-2 rounded w-64 text-center z-10">
                    {f.tooltip}
                  </div>
                </div>
              ))}

              <Button
                type="submit"
                disabled={calculating || locked}
                className="w-full"
              >
                {calculating ? "Calculating..." : "Calculate ROI"}
              </Button>
            </form>

            {results && (
              <div className="mt-4 p-4 bg-blue-50 rounded text-center">
                <p>Current Revenue: {formatCurrency(results.currentRevenue)}</p>
                <p>
                  Projected Revenue: {formatCurrency(results.projectedRevenue)}
                </p>
                <p>ROI: {results.roiPercentage}%</p>
              </div>
            )}
          </CardContent>
        </Card>

        {results && (
          <Button
            onClick={downloadPDF}
            disabled={pdfLoading}
            className="mt-4 bg-green-600 text-white px-6 py-3"
          >
            {pdfLoading ? "Generating..." : "Download PDF"}
          </Button>
        )}
      </section>
    </>
  );
}
