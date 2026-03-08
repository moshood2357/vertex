"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B1F3B]">
            Digital at its peak
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Vertex Prime Digital is a leading website design and web development
            company in Lagos, Nigeria helping businesses build powerful digital
            platforms that attract customers and increase revenue.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            From responsive business websites to ecommerce platforms and SEO
            optimization, our professional web developers create scalable
            solutions designed for performance, speed, and growth.
          </p>

          <Link
            href="/about-us"
            className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition transform"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            width={650}
            height={650}
            src="/yip.jpeg"
            alt="Professional web developers building responsive websites in Lagos"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
