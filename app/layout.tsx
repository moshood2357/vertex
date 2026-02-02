import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
  // ... (rest of metadata stays the same)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vertex Prime Digital",
    url: "https://www.vertexprimedigital.com",
    logo: "https://www.vertexprimedigital.com/nakedlogo.png",
    image: "https://www.vertexprimedigital.com/tagline1.png",
    description:
      "Vertex Prime Digital builds responsive, high-performance websites and digital solutions for businesses.",
    areaServed: { "@type": "Place", name: "Worldwide" },
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
        <link rel="canonical" href="https://vertexprimedigital.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EN90EKMNGW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EN90EKMNGW');
          `}
        </Script>
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
