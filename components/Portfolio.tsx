"use client";

import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <>
      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3B] mb-16 tracking-tight">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="h-64 bg-slate-200 rounded-xl relative overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.2 }}
              >
                <div className="absolute inset-0 bg-[#0B1F3B]/70 opacity-0 group-hover:opacity-80 transition flex items-center justify-center text-white font-semibold text-lg">
                  Project {item} • Result Driven
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
