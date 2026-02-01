"use client";

import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <>
      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="bg-[#0B1F3B] text-white py-32 text-center relative overflow-hidden"
      >
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-slate-300 mb-8 text-lg md:text-xl">
            Partner with Vertex Prime Digital and position your brand at its peak.
          </p>
          <Link
            href="/contact-us"
            className="bg-[#C6A75E] text-[#0B1F3B] px-8 py-4 rounded-md font-medium hover:scale-105 transition transform"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
    </>
  );
}
