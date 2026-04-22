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
    tooltip: "How many of your visitors actually take action (buy, sign up, etc.)?",
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
    tooltip: "How much better you expect conversions to become after improving your design.",
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
    return `${currencySymbols[formData.currency]}${Number(value).toLocaleString()}`;
  };

  const formatCurrencyPDF = (value: string) => {
    return `${formData.currency} ${Number(value).toLocaleString()}`;
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

  /* ================= CALCULATE (UPGRADED MODEL) ================= */

  const calculateROI = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);

    setReportCompanyName(formData.companyName);

    const users = parseFloat(formData.monthlyUsers) || 0;
    const conversion = (parseFloat(formData.currentConversionRate) || 0) / 100;
    const avgValue = parseFloat(formData.avgValuePerUser) || 0;

    // smarter UX uplift cap (more realistic)
    let increase = (parseFloat(formData.expectedConversionIncrease) || 0) / 100;
    increase = Math.min(increase, 0.03); // 3% cap instead of 5%

    const cost = parseFloat(formData.projectCost) || 0;
    const timeline = parseInt(formData.timeline) || 1;

    const profitMargin = 0.6;

    const currentMonthly = users * conversion * avgValue;
    const baseAnnual = currentMonthly * 12 * profitMargin;

    /**
     * IMPROVED MODEL:
     * UX impact grows gradually over time (adoption curve)
     */
    let projectedAnnual = 0;

    for (let year = 1; year <= timeline; year++) {
      const adoptionFactor = year / timeline; // gradual ramp-up
      const adjustedConversion = conversion + increase * adoptionFactor;

      const yearlyRevenue =
        users * adjustedConversion * avgValue * 12 * profitMargin;

      projectedAnnual += yearlyRevenue;
    }

    const currentTotal = baseAnnual * timeline;
    const additionalProfit = projectedAnnual - currentTotal;

    const roi = cost > 0 ? additionalProfit / cost : 0;

    setTimeout(() => {
      setResults({
        currentRevenue: currentTotal.toFixed(2),
        projectedRevenue: projectedAnnual.toFixed(2),
        additionalRevenue: additionalProfit.toFixed(2),
        roiPercentage: roi.toFixed(1),
        timelineApplied: timeline.toString(),
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

    const pdf = new jsPDF();
    let y = 40;

    pdf.setFontSize(18);
    pdf.text("Vertex Prime Digital", 40, y);

    y += 20;
    pdf.setFontSize(12);
    pdf.text("UI/UX Design ROI Report", 40, y);

    y += 20;
    pdf.text(`Company: ${reportCompanyName}`, 40, y);

    y += 20;
    pdf.text(
      `Current Revenue: ${formatCurrencyPDF(results.currentRevenue)}`,
      40,
      y,
    );

    y += 15;
    pdf.text(
      `Projected Revenue: ${formatCurrencyPDF(results.projectedRevenue)}`,
      40,
      y,
    );

    y += 15;
    pdf.text(`ROI: ${results.roiPercentage}%`, 40, y);

    pdf.save("uiux-roi-report.pdf");
    setPdfLoading(false);
  };

  /* ================= UI ================= */

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>UI/UX ROI Calculator | Vertex Prime Digital</title>
        <meta
          name="title"
          content="UI/UX ROI Calculator | Vertex Prime Digital"
        />
        <meta
          name="description"
          content="Estimate the ROI of UI/UX design improvements with Vertex Prime Digital’s UI/UX ROI Calculator. Measure conversion uplift, revenue impact, and generate a professional report instantly."
        />
        <meta
          name="keywords"
          content="UI UX ROI Calculator, UX ROI, UI Design ROI, UX Design Cost Calculator, Conversion Rate Optimization, Digital Product Design ROI, Vertex Prime Digital"
        />
        <meta name="author" content="Vertex Prime Digital" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.vertexprimedigital.com/ui-ux-design-roi-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vertex Prime Digital" />
        <meta
          property="og:title"
          content="UI/UX ROI Calculator | Vertex Prime Digital"
        />
        <meta
          property="og:description"
          content="Calculate the return on investment of UI/UX improvements with Vertex Prime Digital’s ROI Calculator and generate a professional report instantly."
        />
        <meta
          property="og:url"
          content="https://www.vertexprimedigital.com/ui-ux-design-roi-calculator"
        />
        <meta
          property="og:image"
          content="https://www.vertexprimedigital.com/tagline.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UI/UX ROI Calculator | Vertex Prime Digital"
        />
        <meta
          name="twitter:description"
          content="Measure how UI/UX improvements impact revenue and conversions with Vertex Prime Digital’s ROI Calculator."
        />
        <meta
          name="twitter:image"
          content="https://www.vertexprimedigital.com/tagline3.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
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
                  {/* LABEL ADDED HERE */}
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

            {/* ================= RESULTS ================= */}
            {results && (
              <div className="mt-6 bg-gray-100 p-4 rounded text-center space-y-3">
                <p>Current: {formatCurrency(results.currentRevenue)}</p>
                <p>Projected: {formatCurrency(results.projectedRevenue)}</p>
                <p className="font-bold">ROI: {results.roiPercentage}%</p>

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
                    className="bg-gray-300 text-black"
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
