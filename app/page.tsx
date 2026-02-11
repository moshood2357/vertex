// import type { Metadata } from "next";
// import Script from "next/script";
import HomePage from "@/components/HomePage";

// const baseUrl = "https://www.vertexprimedigital.com";



export default function Page() {
  return (
    <>
      {/* ================= Structured Data ================= */}

      {/* <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${baseUrl}/#business`,
            name: "Vertex Prime Digital",
            url: baseUrl,
            logo: `${baseUrl}/nakedlogo.png`,
            image: `${baseUrl}/tagline4.png`,
            description:
              "A Lagos-based digital agency specializing in web development, e-commerce solutions, SEO, and scalable digital platforms.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Lekki",
              addressLocality: "Lagos",
              addressRegion: "Lagos",
              postalCode: "105102",
              addressCountry: "NG",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "6.4698",
              longitude: "3.5852",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+2349038979339",
                contactType: "customer support",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
            ],
            sameAs: [
              "https://facebook.com",
              "https://instagram.com",
              "https://linkedin.com",
              "https://tiktok.com",
            ],
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
          }),
        }}
      /> */}

      <HomePage />
    </>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Header from "./Heading";
// import Hero from "./Hero";
// import About from "./About";
// import Services from "./Services";
// import WhyChooseUs from "./Why-choose-us";
// import Cta from "./Cta";
// import Footer from "./Footer";

// export default function HomePage() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <About />
//       <Services />
//       <WhyChooseUs />

//       