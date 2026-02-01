"use client";

import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <>
      
      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-28 px-6 bg-linear-to-b from-[#0B1F3B] via-[#0F2A4D] to-[#0B1F3B] overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-[#C6A75E]/20 blur-[120px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Why Choose Vertex Digital
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We blend strategy, technology, and refined design to create digital
            platforms engineered for performance and growth.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-xl hover:scale-105 hover:bg-white/15 transition duration-300"
          >
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[#C6A75E] text-[#0B1F3B]">
              {/* Strategy Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v18h18M7 14l3-3 3 3 5-5"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              Strategic Execution
            </h3>
            <p className="text-slate-300 leading-relaxed">
              We design digital ecosystems aligned with business goals, ensuring
              every solution drives measurable impact.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-xl hover:scale-105 hover:bg-white/15 transition duration-300"
          >
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[#C6A75E] text-[#0B1F3B]">
              {/* Technology Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3v18m4.5-18v18M3 9.75h18m-18 4.5h18"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              Cutting-Edge Technology
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Built with scalable frameworks and secure architecture, delivering
              speed, reliability, and long-term performance.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-xl hover:scale-105 hover:bg-white/15 transition duration-300"
          >
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[#C6A75E] text-[#0B1F3B]">
              {/* Results Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-3 0-6 1.5-6 4s3 4 6 4 6-1.5 6-4-3-4-6-4z"
                />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              ROI-Focused Results
            </h3>
            <p className="text-slate-300 leading-relaxed">
              We build platforms optimized for conversions, engagement, and
              sustainable business growth.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
