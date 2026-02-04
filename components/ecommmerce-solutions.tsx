"use client";

import {
  ShoppingCart,
  Smartphone,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  Phone,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";

export default function EcommerceSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO ================= */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto py-28 px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-[#C6A75E] p-3 rounded-lg">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="text-sm bg-green-100 text-green-800"
              >
                Revenue-Focused Stores
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] leading-tight">
              E-Commerce Solutions
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              High-converting online stores designed to increase revenue,
              improve customer experience, and scale with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-medium rounded-md hover:scale-105 transition transform"
              >
                Launch Your Store
              </Link>

              <Link
                href="tel:+2349038979339"
                className="text-lg font-semibold text-[#0B1F3B] hover:text-[#1e457c] flex items-center transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                +2349038979339
              </Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-8">
            <div className="text-center">
              <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Mobile-Optimized Checkout
              </h3>
              <p className="text-gray-600 mt-2">
                Seamless shopping experience across devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
              Built for Growth
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We engineer online stores that don’t just look beautiful — they
              convert visitors into paying customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1F3B] mb-6">
                What You Get
              </h3>

              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <CreditCard className="text-blue-600 mt-1" size={20} />
                  Secure payment gateway integration
                </li>

                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-blue-600 mt-1" size={20} />
                  Advanced security & fraud protection
                </li>

                <li className="flex items-start gap-3">
                  <TrendingUp className="text-blue-600 mt-1" size={20} />
                  Conversion-focused product pages
                </li>

                <li className="flex items-start gap-3">
                  <ShoppingCart className="text-blue-600 mt-1" size={20} />
                  Optimized checkout flow
                </li>

                <li className="flex items-start gap-3">
                  <Smartphone className="text-blue-600 mt-1" size={20} />
                  Fully responsive & mobile-first design
                </li>
              </ul>
            </div>

            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/landscape.png"
                alt="Ecommerce website example"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B]">
              Our E-Commerce Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Strategy & Market Research",
              "Store Design & UX Optimization",
              "Development & Payment Integration",
              "Launch, Testing & Growth Optimization",
            ].map((step, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-2xl shadow-sm"
              >
                <div className="text-2xl font-bold text-[#C6A75E] mb-3">
                  0{index + 1}
                </div>
                <p className="text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#0B1F3B] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Online Sales?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let’s build a powerful online store that drives revenue and
            long-term growth.
          </p>

          <Link
            href="/contact-us"
            className="inline-block bg-[#C6A75E] text-[#0B1F3B] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
