"use client";

import UIUXROICalculator from "@/components/ROICalculator/UUXRoi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Back from "@/components/Back";
import Footer from "@/components/Footer";
import Header from "@/components/Heading";

const CalculateUIUXROICalculatorPage = () => {
  return (
    <>
      <Header />

      <main>
        <div className="flex flex-col items-center w-full py-20">
          {/* Hero Section */}
          <section className="w-full bg-linear-to-b from-purple-50 to-white py-20 px-4 text-center">
            <Back className="mt-20" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1F1147]">
              Instantly Calculate Your{" "}
              <span className="text-[#C6A75E]">UI/UX Design</span> ROI
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
              Discover how better user experience and interface design can
              increase conversions, improve retention, and drive measurable
              business growth.
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
              Why UI/UX ROI Matters
            </h2>

            <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 text-gray-600">
              UI/UX design is not just about aesthetics — it directly impacts
              how users interact with your product. Measuring ROI helps you
              connect design decisions to real business outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
              {[
                "Increase conversions through better user journeys",
                "Reduce bounce rate and friction points",
                "Improve customer satisfaction and retention",
                "Maximize revenue from existing traffic",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="text-purple-600 mt-1" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROI Calculator */}
          <section id="roi-calculator" className="w-full py-20 px-4 bg-gray-50">
            <UIUXROICalculator />
          </section>

          {/* Example Scenarios */}
          <section className="max-w-5xl w-full py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B1F3B]">
              Real Results from Better UX
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "E-commerce | Higher Checkout Completion",
                  description:
                    "Improved checkout UX reduced friction and increased completed purchases significantly.",
                },
                {
                  title: "SaaS Product | Better User Retention",
                  description:
                    "Redesigned onboarding flow helped users understand value faster and reduced churn.",
                },
                {
                  title: "Service Website | More Conversions",
                  description:
                    "Optimized landing page UX increased inquiries and lead generation.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="shadow-lg hover:shadow-xl transition rounded-xl border border-gray-200"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#0B1F3B]">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B1F3B]">
              What Our Clients Say
            </h2>

            <blockquote className="italic max-w-xl mx-auto text-gray-700 text-lg">
              “After improving our UI/UX, we saw a clear increase in
              conversions. This calculator helped us understand the real
              financial impact.”
              <br />
              <span className="block mt-2 font-semibold text-[#0B1F3B]">
                — Sarah Williams, Product Manager, FlowTech
              </span>
            </blockquote>
          </section>

          {/* Final CTA */}
          <section className="w-full bg-linear-to-b from-purple-50 to-white py-20 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B1F3B]">
              Ready to Turn Better UX Into More Revenue?
            </h2>

            <p className="max-w-xl mx-auto mb-8 text-gray-700">
              Calculate your UI/UX ROI now and discover how improving user
              experience can unlock hidden growth in your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#C6A75E] hover:bg-[#B0914A] text-[#0B1F3B] px-8 py-3 text-lg rounded-md shadow-md transition"
                onClick={() =>
                  document
                    .getElementById("roi-calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Calculate My UI/UX ROI
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border border-[#C6A75E] text-[#0B1F3B] hover:bg-[#C6A75E] hover:text-white px-8 py-3 text-lg rounded-md transition"
              >
                Book a Free UI/UX Consultation
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CalculateUIUXROICalculatorPage;
