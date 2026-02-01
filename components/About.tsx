"use client";

import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-6 bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B1F3B]">
              Digital at Its Peak
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Vertex Prime Digital, we don’t just build websites — we engineer
              high-performance digital experiences that position brands for
              authority, growth, and long-term scalability. Every solution is
              crafted with precision, strategy, and modern technology.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              From refined UI/UX design to powerful backend architecture, our
              approach blends innovation with measurable results. We focus on
              delivering platforms that are not only elegant but engineered to
              perform at the highest level.
            </p>

            <Link
              href="/about-us"
              className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition transform"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/yip.jpeg"
              alt="Vertex Prime Digital Web Development"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
