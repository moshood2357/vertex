"use client";

import Header from "@/components/Heading";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/Why-choose-us";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import TrustStrip from "./Trust-trip";
import FAQ from "./FAQ";
import GoogleReviewsSection from "./ReviewsCarousel";

export default function HomePage() {
  return (
    <>
      <Header />
        <main className="min-h-screen">
          <Hero />
          <TrustStrip />
          <About />
          <Services />
          <GoogleReviewsSection />
          <WhyChooseUs />
          <FAQ />
          <Cta />
        </main>
      <Footer />
    </>
  );
}
