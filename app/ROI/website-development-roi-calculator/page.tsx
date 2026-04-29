"use client";

import WebsiteDevelopmentROICalculator from "@/components/ROICalculator/WebDevROI";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Back from "@/components/Back";
import Footer from "@/components/Footer";
import Header from "@/components/Heading";

const CalculateWebsiteROICalculatorPage = () => {
  return (
    <>
      <Header />

      <main>
        <div className="flex flex-col items-center w-full py-20">
          {/* Hero Section */}
          <section className="w-full bg-linear-to-b from-blue-50 to-white py-20 px-4 text-center">
            <Back className="mt-20" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0B1F3B]">
              Instantly Calculate Your{" "}
              <span className="text-[#C6A75E]">Website</span> ROI
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
              Discover how much revenue your business can generate with a
              high-performing website designed to convert visitors into
              customers.
            </p>
            <Button
              size="lg"
              className="bg-[#C6A75E] hover:bg-[#B89A50] text-black px-8 py-3 text-lg rounded-md shadow-md transition"
              onClick={() =>
                document
                  .getElementById("roi-calculator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Calculate Now
            </Button>
          </section>

          {/* Why Calculate ROI */}
          <section className="max-w-4xl w-full py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B1F3B]">
              Why Calculating Your Website ROI Matters
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
              Your website is more than just an online presence — it’s a
              revenue-generating asset. Calculating ROI helps you understand the
              real business impact of your website investment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
              {[
                "Estimate potential revenue from increased conversions",
                "Understand how design impacts customer behavior",
                "Make smarter decisions about your website investment",
                "Measure the true value of improving your online presence",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROI Calculator */}
          <section id="roi-calculator" className="w-full py-20 px-4 bg-gray-50">
            <WebsiteDevelopmentROICalculator />
          </section>

          {/* Example Scenarios */}
          <section className="max-w-5xl w-full py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
              Real Results for Real Businesses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "E-commerce Store | Increased Conversions",
                  description:
                    "A retail business improved checkout UX and increased conversions, resulting in significant monthly revenue growth.",
                },
                {
                  title: "Service Business | More Leads",
                  description:
                    "A consulting firm redesigned its website and saw a surge in qualified leads and inquiries.",
                },
                {
                  title: "Startup | Strong First Impression",
                  description:
                    "A startup launched with a modern website that built trust and accelerated customer acquisition.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="shadow-lg hover:shadow-xl transition rounded-xl border border-gray-200"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="max-w-3xl w-full py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              What Our Clients Say
            </h2>

            <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
              “This ROI calculator helped us clearly see how our website
              redesign would impact revenue. It made the investment decision
              easy.”
              <br />
              <span className="block mt-2 font-semibold text-blue-800">
                — David Johnson, Founder, GrowthHub
              </span>
            </blockquote>
          </section>

          {/* Final CTA */}
          <section className="w-full bg-linear-to-b from-blue-50 to-white py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Ready to Turn Your Website Into a Revenue Machine?
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-gray-700">
              Calculate your website ROI now and see how a strategic design and
              development investment can grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition"
                onClick={() =>
                  document
                    .getElementById("roi-calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Calculate My Website ROI
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-md transition"
              >
                Book a Free Website Consultation
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CalculateWebsiteROICalculatorPage;
