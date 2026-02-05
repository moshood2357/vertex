"use client";

import { Lightbulb, Code, Layers, Settings, Rocket, Phone } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";

export default function CustomDigitalSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO ================= */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto py-28 px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-[#C6A75E] p-3 rounded-lg">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="text-sm bg-purple-100 text-purple-800"
              >
                Tailored Digital Innovation
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] leading-tight">
              Custom Digital Solutions
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We design and develop tailored digital systems that solve complex
              business challenges and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-medium rounded-md hover:scale-105 transition transform"
              >
                Discuss Your Project
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
              <Rocket className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Built for Scale
              </h3>
              <p className="text-gray-600 mt-2">
                Flexible, secure, and future-ready digital systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE BUILD ================= */}
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
              What We Create
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every solution is carefully designed to meet your business goals,
              industry requirements, and long-term scalability needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-5 text-slate-600">
                <li className="flex items-start gap-3">
                  <Code className="text-purple-600 mt-1" size={20} />
                  Custom web applications & dashboards
                </li>

                <li className="flex items-start gap-3">
                  <Layers className="text-purple-600 mt-1" size={20} />
                  Enterprise portals & internal systems
                </li>

                <li className="flex items-start gap-3">
                  <Settings className="text-purple-600 mt-1" size={20} />
                  Workflow automation & integrations
                </li>

                <li className="flex items-start gap-3">
                  <Rocket className="text-purple-600 mt-1" size={20} />
                  SaaS product development
                </li>

                <li className="flex items-start gap-3">
                  <Lightbulb className="text-purple-600 mt-1" size={20} />
                  Innovative digital transformation solutions
                </li>
              </ul>
            </div>

            <div className="relative w-full h-72 md:h-96">
              <Image
                src="/landscape.png"
                alt="Custom digital solutions development services"
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
              Our Development Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Discovery & Strategy",
              "System Architecture Design",
              "Development & Integration",
              "Testing, Launch & Optimization",
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
            Ready to Build Something Unique?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let Vertex Prime Digital design a custom digital solution that
            transforms your operations and fuels long-term growth.
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
