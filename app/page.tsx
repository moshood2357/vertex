"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Heading";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import WhyChooseUs from "@/components/Why-choose-us";
import Portfolio from "@/components/Portfolio";

export default function Home() {


  return (
    <>
      
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <Portfolio /> */}
      <Cta />
      <Footer />

      {/* ================= TRUST STRIP ================= */}
      {/* <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "24/7", label: "Ongoing Support" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-[#0B1F3B]">
                {item.num}
              </h3>
              <p className="text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
      {/* about section */}

      
    
      
      
    </>
  );
}
