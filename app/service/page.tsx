"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design and Development",
      description:
        "We build high-performance, scalable websites tailored to your brand and business objectives.",
      features: [
        "Custom Next.js / React development",
        "Responsive design (mobile-first)",
        "Performance optimization",
        "SEO-ready architecture",
        "CMS integration",
        "Analytics setup",
      ],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Robust online stores engineered to maximise conversions and long-term growth.",
      features: [
        "Shopify / Custom store builds",
        "Secure payment integrations",
        "Inventory & product management",
        "Conversion optimisation",
        "Checkout optimisation",
        "Sales analytics dashboard",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Strategic user experiences that increase engagement, usability, and retention.",
      features: [
        "Wireframing & prototyping",
        "User journey mapping",
        "Interface design systems",
        "Accessibility best practices",
        "Usability testing",
        "Brand-aligned visuals",
      ],
    },
    {
      title: "SEO & Optimization",
      description:
        "Data-driven strategies to improve visibility and generate measurable traffic growth.",
      features: [
        "Technical SEO audits",
        "On-page optimisation",
        "Core Web Vitals improvements",
        "Keyword research",
        "Content structure optimisation",
        "Performance monitoring",
      ],
    },
    {
      title: "Website Maintenance",
      description:
        "Ongoing support to ensure your digital presence remains secure, fast, and reliable.",
      features: [
        "Regular updates & backups",
        "Security monitoring",
        "Bug fixes & enhancements",
        "Performance checks",
        "Uptime monitoring",
        "Priority support",
      ],
    },
    {
      title: "Custom Digital Solutions",
      description:
        "Tailored systems and platforms built around your unique operational needs.",
      features: [
        "Custom dashboards",
        "Client portals",
        "Internal tools",
        "API integrations",
        "Workflow automation",
        "Scalable architecture",
      ],
    },
  ];

  return (
      <div className="">
          
          <Header />

          <main className="bg-white">
      {/* HERO */}
      <section className="py-32 bg-linear-to-br from-slate-50 to-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl font-extrabold text-[#0B1F3B] mb-6">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vertex Digital delivers high-performance digital solutions designed
            to elevate brands, accelerate growth, and create measurable impact.
            We combine strategic thinking, modern engineering, and refined
            design to build digital experiences that convert.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Left: Title + Description */}
              <div>
                <h2 className="text-3xl font-bold text-[#0B1F3B] mb-6">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right: Features */}
              <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-indigo-600 mt-1 h-5 w-5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#0B1F3B] mb-16"
          >
            Our Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Discovery & Strategy",
              "Design & Prototyping",
              "Development & Testing",
              "Launch & Optimisation",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-4">
                  0{index + 1}
                </div>
                <h3 className="font-semibold text-[#0B1F3B]">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-linear-to-r from-indigo-600 to-blue-600 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Let’s build a solution tailored to your business goals.
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition transform"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
          </main>
          
          <Footer />
    </div>
  );
}
