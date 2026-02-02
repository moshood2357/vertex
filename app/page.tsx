import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "@/components/HomePage";

const baseUrl = "https://www.vertexprimedigital.com";

export const metadata: Metadata = {
  title:
    "Vertex Prime Digital | Web design, Development Company in Lagos, Nigeria",
  description:
    "Vertex Prime Digital is a Lagos-based web development company delivering high-performance websites, e-commerce platforms, SEO services, and scalable digital solutions for ambitious brands worldwide.",
  keywords: [
    "Web Development Company Lagos",
     "web design and development agency",
    "Website design and development company in nigeria",
    "E-commerce Development Lagos",
    "SEO Services Nigeria",
    "Digital Agency Lagos",
    "Custom Web Applications",
    "Vertex Prime Digital",
    "bespoke web development services",
    "high performance website development services",
    "scalable website development for growing businesses",
    "premium ecommerce web design agency",
    "custom ecommerce website development",
  ],
  authors: [{ name: "Vertex Prime Digital" }],
  creator: "Vertex Prime Digital",
  publisher: "Vertex Prime Digital",
  metadataBase: new URL(baseUrl),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Vertex Prime Digital | Web Development Company in Lagos",
    description:
      "We design and develop high-performance digital platforms engineered for scalability, conversions, and measurable ROI.",
    url: baseUrl,
    siteName: "Vertex Prime Digital",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: `${baseUrl}/tagline1.png`,
        width: 1200,
        height: 630,
        alt: "Vertex Prime Digital - Web Design & Development Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vertex Prime Digital | Web Development Lagos",
    description:
      "High-performance websites, e-commerce solutions, and digital growth strategies.",
    images: [`${baseUrl}/tagline1.png`],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Page() {
  return (
    <>
      {/* ================= Structured Data ================= */}

      <Script
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
            image: `${baseUrl}/tagline1.png`,
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
      />

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

//       {/* Trust Strip */}
//       <section className="py-16 bg-slate-50">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
//           {[
//             { num: "50+", label: "Projects Delivered" },
//             { num: "98%", label: "Client Satisfaction" },
//             { num: "24/7", label: "Ongoing Support" },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//             >
//               <h3 className="text-3xl font-semibold text-[#0B1F3B]">
//                 {item.num}
//               </h3>
//               <p className="text-slate-600">{item.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <Cta />
//       <Footer />
//     </>
//   );
// }

{
  /* ================= TRUST STRIP ================= */
}
{
  /* <section className="py-16 bg-slate-50">
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
</section> */
}
{
  /* about section */
}
