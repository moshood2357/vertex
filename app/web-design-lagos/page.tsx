"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";

export default function WebDesignLagosPage() {
  return (
    <div>
      <Header />

      <main className="bg-[#0B1F3B] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden pt-24">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-[#C6A75E]/10 rounded-full blur-3xl -z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />

          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Web Design Company in Lagos That Drives Real Business Growth
            </motion.h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              Vertex Prime Digital is a leading web design company in Lagos,
              Nigeria, helping businesses build fast, modern, and SEO-optimized
              websites that attract customers, generate leads, and increase
              revenue.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-semibold rounded-md hover:scale-105 transition"
              >
                Get Free Consultation
              </Link>

              <Link
                href="tel:+2349038979339"
                className="border border-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-white hover:text-[#0B1F3B] transition"
              >
                <Phone size={18} />
                Call Now
              </Link>
            </div>
          </div>
        </section>
        {/* INTRO */}{" "}
        <section className="py-16 border-t border-white/10">
          {" "}
          <div className="max-w-5xl mx-auto px-6 text-slate-300 leading-relaxed text-lg">
            {" "}
            <p>
              {" "}
              If you are searching for a reliable web design company in Lagos,
              Vertex Prime Digital provides professional website design and web
              development services tailored to businesses in Nigeria. In today’s
              digital-first economy, your website is more than just an online
              presence — it is your most powerful marketing tool.{" "}
            </p>{" "}
            <p className="mt-6">
              {" "}
              As experienced web developers in Lagos, we specialize in building
              high-performance websites that are visually appealing,
              mobile-friendly, and optimized for search engines. Whether you
              need a business website, an e-commerce platform, or a custom web
              application, we help you stand out in a competitive market.{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        {/* SERVICES */}{" "}
        <section className="py-16 bg-[#0f2a4d]">
          {" "}
          <div className="max-w-7xl mx-auto px-6">
            {" "}
            <h2 className="text-3xl font-semibold text-center">
              {" "}
              Our Website Design & Development Services in Lagos{" "}
            </h2>{" "}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {" "}
              {[
                "Business Website Design in Lagos",
                "E-commerce Website Development Nigeria",
                "UI/UX Design Services",
                "Website Redesign & Optimization",
                "Website Maintenance & Support",
                "Custom Web Development Solutions",
              ].map((service, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#0B1F3B] rounded-xl border border-white/10 hover:border-[#C6A75E]/40 transition"
                >
                  {" "}
                  <p className="text-lg font-medium">{service}</p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* WHY CHOOSE US */}{" "}
        <section className="py-16">
          {" "}
          <div className="max-w-5xl mx-auto px-6">
            {" "}
            <h2 className="text-3xl font-semibold">
              {" "}
              Why Choose Vertex Prime Digital as Your Web Design Company in
              Lagos?{" "}
            </h2>{" "}
            <ul className="mt-8 space-y-4 text-slate-300">
              {" "}
              <li>✔ SEO-optimized websites that rank on Google</li>{" "}
              <li>✔ Fast-loading and performance-focused design</li>{" "}
              <li>✔ Mobile-first responsive development</li>{" "}
              <li>✔ Affordable web design services in Lagos</li>{" "}
              <li>✔ Deep understanding of Nigerian market trends</li>{" "}
              <li>✔ Conversion-focused design to increase sales</li>{" "}
            </ul>{" "}
          </div>{" "}
        </section>{" "}
        {/* SEO BOOST CONTENT */}{" "}
        <section className="py-16 bg-[#0f2a4d]">
          {" "}
          <div className="max-w-5xl mx-auto px-6 text-slate-300 leading-relaxed">
            {" "}
            <h2 className="text-3xl font-semibold text-white">
              {" "}
              Affordable Website Design in Lagos for Growing Businesses{" "}
            </h2>{" "}
            <p className="mt-6">
              {" "}
              Finding affordable website design in Lagos without compromising
              quality can be difficult. At Vertex Prime Digital, we provide
              cost-effective web development solutions that help startups and
              established businesses build a strong online presence.{" "}
            </p>{" "}
            <p className="mt-6">
              {" "}
              Our team of expert web developers in Nigeria focuses on delivering
              websites that are not only visually impressive but also optimized
              for speed, SEO, and user experience. This ensures your website
              ranks well on search engines and converts visitors into paying
              customers.{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        {/* CTA */}{" "}
        <section className="py-20 text-center">
          {" "}
          <div className="max-w-3xl mx-auto px-6">
            {" "}
            <h2 className="text-3xl font-semibold">
              {" "}
              Ready to Work With a Top Web Design Company in Lagos?{" "}
            </h2>{" "}
            <p className="mt-4 text-slate-300">
              {" "}
              Let Vertex Prime Digital help you build a powerful website that
              attracts customers and grows your business online.{" "}
            </p>{" "}
            <Link
              href="/contact"
              className="inline-block mt-8 bg-[#C6A75E] text-[#0B1F3B] px-8 py-3 rounded-md font-semibold hover:scale-105 transition"
            >
              {" "}
              Get Started Today{" "}
            </Link>{" "}
          </div>{" "}
        </section>
      </main>

      <Footer />
    </div>
  );
}
