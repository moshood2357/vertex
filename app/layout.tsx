

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Vertex Prime Digital | Website Design, Development & Digital Solutions",
  description:
    "Vertex Prime Digital builds responsive, high-performance websites and digital solutions for businesses. Elevate your online presence with cutting-edge web design and development.",
  keywords: [
    "web development in Nigeria",
    "digital agency",
    "UI/UX design company in lagos",
    "responsive websites",
    "SEO-friendly web design",
    "web development company",
    "digital solutions",
    "Vertex Prime Digital",
    "custom web design",
    "professional website services",
  ],
  authors: [
    { name: "Vertex Prime Digital", url: "https://www.vertexprimedigital.com" },
  ],
  openGraph: {
    title:
      "Vertex Prime Digital | Website Design, Development & Digital Solutions",
    description:
      "Build responsive, high-performance websites and digital solutions for businesses. Cutting-edge design, development, and performance optimization.",
    url: "https://www.vertexprimedigital.com",
    siteName: "Vertex Prime Digital",
    images: [
      {
        url: "/tagline1.png",
        width: 1200,
        height: 630,
        alt: "Vertex Prime Digital - Website Design, Development & Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vertex Prime Digital | Website Design, Development & Digital Solutions",
    description:
      "Build responsive, high-performance websites and digital solutions for businesses. Cutting-edge design, development, and performance optimization.",
    images: ["/tagline1.png"],
    creator: "@VertexPrimeDigital",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vertex Prime Digital",
    url: "https://www.vertexprimedigital.com",
    logo: "https://www.vertexprimedigital.com/nakedlogo.png",
    image: "https://www.vertexprimedigital.com/tagline1.png",

    description:
      "Vertex Prime Digital builds responsive, high-performance websites and digital solutions for businesses.",

    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+2349038979339",
        contactType: "customer support",
        areaServed: "Global",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/VertexPrimeDigital",
      "https://twitter.com/VertexPrimeDigital",
      "https://www.linkedin.com/company/vertexprimedigital",
      "https://www.instagram.com/VertexPrimeDigital",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vertexprimedigital.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
