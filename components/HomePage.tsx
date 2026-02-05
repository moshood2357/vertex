"use client";

import Header from "@/components/Heading";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/Why-choose-us";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import TrustStrip from "./Trust-trip";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <WhyChooseUs />
      <Cta />
      <Footer />
    </>
  );
}
