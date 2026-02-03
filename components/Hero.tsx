"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-[#0B1F3B] via-[#0B1F3B]/95 to-[#0B1F3B] text-white overflow-hidden pt-24 md:pt-20">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#C6A75E]/10 rounded-full blur-3xl -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Web Design, Development & Digital Solutions for Ambitious Brands
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            We design and develop high-performance digital platforms that
            position your business at the top of its industry.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/contact-us"
              className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-semibold rounded-md text-center hover:scale-105 transition-transform duration-300"
            >
              Request a Consultation
            </Link>

            <Link
              href="tel:+2349038979339"
              className="border border-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-white hover:text-[#0B1F3B] transition duration-300"
            >
              <Phone size={18} />
              Call Us Now
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/landscape.png"
            alt="Vertex Prime Digital web design and development"
            width={650}
            height={650}
            priority
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
