"use client";

import { useState } from "react";
import Head from "next/head";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import jsPDF from "jspdf";
import Header from "../Heading";
import Footer from "../Footer";

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

/* ================= FIELDS CONFIG ================= */

const fields: {
  label: string;
  name: keyof FormData;
  placeholder: string;
  tooltip: string;
  type: "text" | "number";
}[] = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "ABC Ltd",
    tooltip: "Enter your business name. This will appear on your report.",
    type: "text",
  },
  {
    label: "Monthly Visitors",
    name: "monthlyVisitors",
    placeholder: "5000",
    tooltip: "How many people visit your website each month?",
    type: "number",
  },
  {
    label: "Current Conversion Rate (%)",
    name: "currentConversionRate",
    placeholder: "2",
    tooltip: "Out of 100 visitors, how many become customers?",
    type: "number",
  },
  {
    label: "Average Order Value",
    name: "avgOrderValue",
    placeholder: "50",
    tooltip: "Average amount a customer spends per order.",
    type: "number",
  },
  {
    label: "Expected Conversion Increase (%)",
    name: "expectedConversionIncrease",
    placeholder: "1.5",
    tooltip: "Expected improvement after redesign.",
    type: "number",
  },
  {
    label: "Project Cost",
    name: "projectCost",
    placeholder: "3000",
    tooltip: "Total cost of the website project.",
    type: "number",
  },
  {
    label: "Timeline (Years)",
    name: "timeline",
    placeholder: "2",
    tooltip: "How long you want to measure ROI.",
    type: "number",
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

  /* ================= FORMAT ================= */

  const formatCurrency = (value: string) => {
    const num = Number(value).toLocaleString();
    return `${currencySymbols[formData.currency] || ""}${num}`;
  };

  const formatCurrencyPDF = (value: string) => {
    const num = Number(value).toLocaleString();
    return `${formData.currency} ${num}`;
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

  /* ================= CALCULATION ================= */

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

  const downloadPDF = () => {
    if (!results) return;

    setPdfLoading(true);

    const pdf = new jsPDF("p", "pt", "a4");
    const margin = 40;
    let y = 50;

    pdf.setFontSize(18);
    pdf.text("Vertex Prime Digital", margin, y);

    y += 22;
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
    pdf.setFontSize(12);
    pdf.text("RESULTS", margin, y);

    y += 20;
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

    const footerY = pdf.internal.pageSize.getHeight() - 50;

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
    setPdfLoading(false);
  };

  /* ================= UI ================= */

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Web Development ROI Calculator | Vertex Prime Digital</title>
        <meta
          name="title"
          content="Web Development ROI Calculator | Vertex Prime Digital"
        />
        <meta
          name="description"
          content="Estimate the ROI of your website investment with Vertex Prime Digital’s Web Development ROI Calculator. Measure cost vs value, track performance impact, and generate a downloadable report instantly."
        />
        <meta
          name="keywords"
          content="Web Development ROI Calculator, Website ROI, Website Cost Calculator, Web Development Cost, Digital ROI, Business Website Value, Vertex Prime Digital"
        />
        <meta name="author" content="Vertex Prime Digital" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.vertexprimedigital.com/web-development-roi-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vertex Prime Digital" />
        <meta
          property="og:title"
          content="Web Development ROI Calculator | Vertex Prime Digital"
        />
        <meta
          property="og:description"
          content="Calculate the return on investment of your website with Vertex Prime Digital’s Web Development ROI Calculator and get a professional report instantly."
        />
        <meta
          property="og:url"
          content="https://www.vertexprimedigital.com/web-development-roi-calculator"
        />
        <meta
          property="og:image"
          content="https://www.vertexprimedigital.com/tagline.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development ROI Calculator | Vertex Prime Digital"
        />
        <meta
          name="twitter:description"
          content="Measure your website’s business impact and ROI with Vertex Prime Digital’s Web Development ROI Calculator."
        />
        <meta
          name="twitter:image"
          content="https://www.vertexprimedigital.com/tagline3.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="min-h-screen bg-linear-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-32">
        <Card className="w-full max-w-lg rounded-2xl shadow-2xl border bg-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
              Website ROI Calculator
            </h2>

            <form onSubmit={calculateROI} className="space-y-5">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                disabled={locked}
                className="w-full px-4 py-3 rounded-lg border"
              >
                <option value="GBP">GBP (£)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="NGN">NGN (₦)</option>
              </select>

              {fields.map((f) => (
                <div key={f.name} className="relative group">
                  <input
                    type={f.type}
                    name={f.name}
                    value={formData[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    disabled={locked}
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-3 py-2 rounded w-64 text-center">
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
              <div className="mt-6 p-5 bg-blue-50 rounded-xl text-center">
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

      <Footer />
    </>
  );
}
