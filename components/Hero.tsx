"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-linear-to-b from-[#0B1F3B] via-[#0B1F3B]/90 to-[#0B1F3B] text-white overflow-hidden pt-28 md:pt-16">
        {/* Abstract Background Shape */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#C6A75E]/10 rounded-full blur-3xl -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Web design, Development & Digital Solutions for Ambitious Brands
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We design and develop high-performance digital platforms that
              position your business at the top of its industry.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact-us"
                className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-medium rounded-md hover:scale-105 transition transform"
              >
                Request a Consultation
              </Link>
              <Link
                href="tel:+2349038979339"
                className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0B1F3B] transition block md:inline-flex items-center gap-2"
              >
                <Phone size={18} />
                Call us now
              </Link>
            </div>
          </motion.div>

          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                width={650}
                height={650}
                src="/landscape.png"
                alt="Professional carpet cleaning team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
