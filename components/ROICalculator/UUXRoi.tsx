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
  monthlyUsers: string;
  currentConversionRate: string;
  avgValuePerUser: string;
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
  paybackYear?: string;
};

/* ================= FIELDS ================= */

const fields = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "ABC Ltd",
    tooltip: "Your brand name (appears on report).",
    type: "text",
  },
  {
    label: "Monthly Users",
    name: "monthlyUsers",
    placeholder: "5000",
    tooltip: "How many people visit or use your product each month?",
    type: "number",
  },
  {
    label: "Current Conversion Rate (%)",
    name: "currentConversionRate",
    placeholder: "2",
    tooltip:
      "How many of your visitors actually take action (buy, sign up, etc.)?",
    type: "number",
  },
  {
    label: "Average Value Per User",
    name: "avgValuePerUser",
    placeholder: "50",
    tooltip: "How much revenue you typically earn from one customer.",
    type: "number",
  },
  {
    label: "Expected UX Improvement (%)",
    name: "expectedConversionIncrease",
    placeholder: "1.5",
    tooltip:
      "How much better you expect conversions to become after improving your design.",
    type: "number",
  },
  {
    label: "UI/UX Project Cost",
    name: "projectCost",
    placeholder: "3000",
    tooltip: "Total amount you plan to spend on the UI/UX design project.",
    type: "number",
  },
  {
    label: "Timeline (Years)",
    name: "timeline",
    placeholder: "2",
    tooltip: "How many years you want to measure the business impact.",
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

export default function UIUXROICalculator() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    monthlyUsers: "",
    currentConversionRate: "",
    avgValuePerUser: "",
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
    return `${currencySymbols[formData.currency]}${Number(
      value,
    ).toLocaleString()}`;
  };

  const formatCurrencyPDF = (value: string) => {
    return `${formData.currency} ${Number(value).toLocaleString()}`;
  };

  /* ================= HELPERS ================= */

  const roiMultiple = results
    ? (Number(results.roiPercentage) / 100).toFixed(1)
    : null;

  const getROILevel = (roi: number) => {
    if (roi < 100) return "Moderate return";
    if (roi < 500) return "Strong return";
    return "High-impact opportunity";
  };

  /* ================= HANDLE ================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ================= CALCULATE ================= */

  const calculateROI = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);

    setReportCompanyName(formData.companyName);

    const users = parseFloat(formData.monthlyUsers) || 0;
    const conversion = (parseFloat(formData.currentConversionRate) || 0) / 100;
    const avgValue = parseFloat(formData.avgValuePerUser) || 0;

    let increase = (parseFloat(formData.expectedConversionIncrease) || 0) / 100;
    increase = Math.min(increase, 0.03);

    const cost = parseFloat(formData.projectCost) || 0;
    const timeline = parseInt(formData.timeline) || 1;

    const profitMargin = 0.6;
    const trafficGrowthRate = 0.05;
    const adoptionDelay = 0.6;

    let currentTotal = 0;
    let projectedTotal = 0;
    let cumulativeProfit = 0;

    let currentUsers = users;

    // ✅ NEW PAYBACK TRACKER
    let paybackYear: string = "Not achieved";
    let paybackFound = false;

    for (let year = 1; year <= timeline; year++) {
      currentUsers = currentUsers * (1 + trafficGrowthRate);

      const adoptionFactor = Math.min(
        1,
        adoptionDelay + (year / timeline) * (1 - adoptionDelay),
      );

      const adjustedConversion = conversion + increase * adoptionFactor;

      const currentYearRevenue =
        currentUsers * conversion * avgValue * 12 * profitMargin;

      const projectedYearRevenue =
        currentUsers * adjustedConversion * avgValue * 12 * profitMargin;

      currentTotal += currentYearRevenue;
      projectedTotal += projectedYearRevenue;

      cumulativeProfit += projectedYearRevenue - currentYearRevenue;

      // 🔥 BREAK-EVEN DETECTION
      if (!paybackFound && cumulativeProfit >= cost) {
        paybackYear = `Year ${year}`;
        paybackFound = true;
      }
    }

    const additionalProfit = projectedTotal - currentTotal;
    const roi = cost > 0 ? additionalProfit / cost : 0;

    setTimeout(() => {
      setResults({
        currentRevenue: currentTotal.toFixed(2),
        projectedRevenue: projectedTotal.toFixed(2),
        additionalRevenue: additionalProfit.toFixed(2),
        roiPercentage: (roi * 100).toFixed(1),
        timelineApplied: timeline.toString(),
        paybackYear,
      });

      setCalculating(false);
      setLocked(true);
    }, 600);
  };
  /* ================= RESET ================= */

  const resetCalculator = () => {
    setLocked(false);
    setResults(null);
    setFormData({
      companyName: "",
      monthlyUsers: "",
      currentConversionRate: "",
      avgValuePerUser: "",
      expectedConversionIncrease: "",
      projectCost: "",
      timeline: "",
      currency: formData.currency,
    });
  };

  /* ================= PDF ================= */

  const downloadPDF = () => {
    if (!results) return;

    setPdfLoading(true);

    const pdf = new jsPDF("p", "pt", "a4");
    const margin = 40;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let y = 50;

    // ===== HEADER =====
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Vertex Prime Digital", margin, y);

    y += 22;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text("Website Design & Development ROI Report", margin, y);

    // ===== META INFO =====
    y += 25;
    pdf.setFontSize(10);

    pdf.text(`Company: ${reportCompanyName || "N/A"}`, margin, y);

    y += 15;
    const now = new Date();
    pdf.text(`Generated (Local): ${now.toLocaleString()}`, margin, y);

    y += 15;
    pdf.text(`Generated (UTC): ${now.toISOString()}`, margin, y);

    // ===== DIVIDER =====
    y += 20;
    pdf.setDrawColor(180);
    pdf.line(margin, y, pageWidth - margin, y);

    // ===== RESULTS =====
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

    // Highlight additional revenue
    pdf.setTextColor(0, 128, 0);
    pdf.text(
      `Additional Revenue: ${formatCurrencyPDF(results.additionalRevenue)}`,
      margin,
      y,
    );

    pdf.setTextColor(0, 0, 0);

    y += 16;

    // ROI emphasized slightly
    pdf.setFont("helvetica", "bold");
    pdf.text(`ROI: ${results.roiPercentage}%`, margin, y);

    pdf.setFont("helvetica", "normal");

    // ===== FOOTER =====
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

    // Reset color (important for future edits)
    pdf.setTextColor(0, 0, 0);

    pdf.save("roi-report.pdf");
    setPdfLoading(false);
  };

  /* ================= UI ================= */

  return (
    <>
      <Head>
        <title>UI/UX ROI Calculator | Vertex Prime Digital</title>
      </Head>

      <Header />

      <section className="min-h-screen flex items-center justify-center py-24 px-4 bg-gray-50">
        <Card className="max-w-lg w-full shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-[#0B1F3B] mb-6">
              UI/UX ROI Calculator
            </h2>

            <form onSubmit={calculateROI} className="space-y-5">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                disabled={locked}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="GBP">GBP (£)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="NGN">NGN (₦)</option>
              </select>

              {fields.map((f) => (
                <div key={f.name} className="relative group">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    {f.label}
                  </label>

                  <input
                    type={f.type}
                    name={f.name}
                    value={formData[f.name as keyof FormData]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    disabled={locked}
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-3 py-2 rounded w-64 text-center">
                    {f.tooltip}
                  </div>
                </div>
              ))}

              <Button
                type="submit"
                disabled={calculating || locked}
                className="w-full bg-[#C6A75E] text-[#0B1F3B]"
              >
                {calculating ? "Calculating..." : "Calculate ROI"}
              </Button>
            </form>

            {results && (
              <div className="mt-6 bg-gray-100 p-4 rounded text-center space-y-3">
                <p>Current: {formatCurrency(results.currentRevenue)}</p>
                <p>Projected: {formatCurrency(results.projectedRevenue)}</p>

                <p className="text-green-700 font-medium">
                  +{formatCurrency(results.additionalRevenue)} additional profit
                </p>

                <p className="font-bold text-lg text-[#0B1F3B]">
                  ROI: {results.roiPercentage}% (₦{roiMultiple} earned per ₦1
                  invested)
                </p>

                <p className="text-sm text-gray-600">
                  {getROILevel(Number(results.roiPercentage))}
                </p>

                <p className="text-sm text-gray-600">
                  Payback: {results.paybackYear}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  This estimate assumes improved conversion performance and
                  steady growth over the selected period.
                </p>

                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    onClick={downloadPDF}
                    disabled={pdfLoading}
                    className="bg-green-600 text-white"
                  >
                    {pdfLoading ? "Generating..." : "Download PDF"}
                  </Button>

                  <Button
                    onClick={resetCalculator}
                    className="bg-[#C6A75E] text-black"
                  >
                    Recalculate
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
