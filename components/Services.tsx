"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      desc: "High-performance, responsive websites engineered for scalability, speed, and business impact.",
      href: "/services/website-development",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Conversion-focused online stores built to maximise revenue and customer experience.",
      href: "/services/ecommerce-solutions",
    },
    {
      title: "UI/UX Design",
      desc: "Strategic, user-centered interfaces crafted to increase engagement and retention.",
      href: "/services/ui-ux-design",
    },
    {
      title: "SEO & Optimization",
      desc: "Data-driven visibility strategies that generate measurable growth and qualified traffic.",
      href: "/services/seo-optimization",
    },
    {
      title: "Website Maintenance",
      desc: "Proactive monitoring, updates, and support to keep your digital assets secure and fast.",
      href: "/services/website-maintenance",
    },
    {
      title: "Custom Digital Solutions",
      desc: "Tailored digital systems designed around your operational and growth objectives.",
      href: "/services/custom-digital-solutions",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 bg-linear-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F3B]">
            Our <span className="text-[#C6A75E]">Expertise</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            We combine strategy, design, and engineering to deliver digital
            solutions that drive measurable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/70 backdrop-blur-lg border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 transition duration-500"></div>

              <h3 className="text-xl font-semibold text-[#0B1F3B] mb-4 relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 relative z-10">
                {service.desc}
              </p>

              <div className="relative z-10">
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#C6A75E] font-medium hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            href="/contact-us"
            className="inline-block bg-[#C6A75E] text-[#0B1F3B] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
