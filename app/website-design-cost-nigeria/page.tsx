"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Header from "@/components/Heading";

export default function Page() {
  return (
      <div className="">
          <Header />
      <main className="bg-[#0B1F3B] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 py-20">
          {/* HERO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Website Design Cost in Nigeria (2026 Guide)
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 mb-12 text-lg"
          >
            Website pricing in Nigeria varies based on design quality,
            functionality, and business goals. This guide breaks down real
            website costs in Lagos and across Nigeria so you can make the right
            investment decision.
          </motion.p>

          {/* PRICING */}
          <section className="space-y-8">
            {/* BASIC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#0f2a4d] border border-white/10 hover:border-[#C6A75E]/40 transition"
            >
              <h2 className="text-2xl font-semibold text-[#C6A75E]">
                💡 Basic Website
              </h2>
              <p className="text-slate-300 mt-2">
                ₦150,000 – ₦400,000 (Ideal for small businesses and personal
                brands)
              </p>
              <p className="mt-2 text-slate-400">
                Includes simple pages, contact form, and basic mobile
                responsiveness.
              </p>
            </motion.div>

            {/* BUSINESS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-[#0f2a4d] border border-white/10 hover:border-[#C6A75E]/40 transition"
            >
              <h2 className="text-2xl font-semibold text-[#C6A75E]">
                🚀 Business Website
              </h2>
              <p className="text-slate-300 mt-2">
                ₦400,000 – ₦1,000,000 (SEO-ready, high-converting websites)
              </p>
              <p className="mt-2 text-slate-400">
                Advanced design, SEO optimization, and lead generation
                structure.
              </p>
            </motion.div>

            {/* ECOMMERCE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-[#0f2a4d] border border-white/10 hover:border-[#C6A75E]/40 transition"
            >
              <h2 className="text-2xl font-semibold text-[#C6A75E]">
                🛒 Ecommerce Website
              </h2>
              <p className="text-slate-300 mt-2">
                ₦800,000 – ₦3,000,000+ (Full online store systems)
              </p>
              <p className="mt-2 text-slate-400">
                Payment integration, product management, and scalable backend
                systems.
              </p>
            </motion.div>
          </section>

          {/* FACTORS */}
          <motion.section
            className="mt-16 p-6 rounded-xl bg-[#0f2a4d] border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              What Affects Website Cost in Nigeria?
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✔ Type of website</li>
              <li>✔ Design complexity</li>
              <li>✔ Features & functionality</li>
              <li>✔ SEO optimization</li>
              <li>✔ Payment integration</li>
            </ul>
          </motion.section>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact-us"
              className="inline-block bg-[#C6A75E] text-[#0B1F3B] px-8 py-3 rounded-md font-semibold hover:scale-105 transition"
            >
              Get Exact Website Quote
            </a>
          </motion.div>

          {/* FAQ */}
          <motion.section
            className="mt-16 p-6 rounded-xl bg-[#0f2a4d] border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="font-semibold text-white">
                  How much does a website cost in Nigeria?
                </h3>
                <p>
                  From ₦150,000 for basic sites to ₦3,000,000+ for advanced
                  systems.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Why do website prices vary in Nigeria?
                </h3>
                <p>
                  It depends on design quality, features, and developer
                  expertise.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
          </main>
          
          <Footer />
    </div>
  );
}
