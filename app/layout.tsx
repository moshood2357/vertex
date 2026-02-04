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
  metadataBase: new URL("https://www.vertexprimedigital.com"),

  title: {
    default:
      "Vertex Prime Digital | Website Design, Development & Digital Solutions Agency",
    template: "%s | Vertex Prime Digital",
  },

  description:
    "Vertex Prime Digital is a global web development and digital solutions agency delivering high-performance websites, e-commerce platforms, SEO, IT consulting, and scalable digital systems for businesses worldwide.",

  applicationName: "Vertex Prime Digital",

  keywords: [
    "Website Development Company",
    "Website design and development services",
    "Website design and development company",
    "website development agency Nigeria",
    "best web development company in Lagos",
    "affordable website design nigeria",
    "ecommerce website developers near me",
    "website development cost in Nigeria",
    "website development services for small business",
    "responsive website design for small businesses",
    "affordable web development for startups",
    "small business website development",
    "affordable ecommerce solutions",
    "Digital agency in Nigeria",
    "web development Lagos",
    "ambitious brands",
    "transform brands",
    "SEO friendly website development Nigeria",
    "affordable web development company in Lagos",
    "digital solutions agency",
    "ecommerce development Nigeria",
    "Web Design Agency",
    "E-commerce Development",
    "Digital Solutions Company",
    "High-performance, SEO-structured websites built with modern frameworks",
    "IT Consulting Services",
    "SEO Services",
    "Web Development Lagos",
    "Digital Agency Nigeria",
    "Vertex Prime Digital",
  ],

  authors: [{ name: "Vertex Prime Digital" }],
  creator: "Vertex Prime Digital",
  publisher: "Vertex Prime Digital",

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

  alternates: {
    canonical: "https://www.vertexprimedigital.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "Vertex Prime Digital | Website Development & Digital Solutions Agency",
    description:
      "Professional website development, e-commerce solutions, SEO, IT consulting, and digital transformation services tailored for modern businesses.",
    url: "https://www.vertexprimedigital.com",
    siteName: "Vertex Prime Digital",
    images: [
      {
        url: "/tagline1.jpg",
        width: 1200,
        height: 630,
        alt: "Vertex Prime Digital - Web Design, Development & Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vertex Prime Digital | Website Design, Development & Digital Solutions",
    description:
      "Custom websites, e-commerce platforms, SEO, and IT solutions built for performance and growth.",
    images: ["/tagline1.jpg"],
  },

  category: "Digital Agency",


  other: {
    "theme-color": "#0B1F3B",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://www.vertexprimedigital.com/#business",
    name: "Vertex Prime Digital",
    url: "https://www.vertexprimedigital.com",
    logo: "https://www.vertexprimedigital.com/nakedlogo.png",
    image: "https://www.vertexprimedigital.com/tagline1.jpg",
    description:
      "Vertex Prime Digital is a global web development and digital solutions agency specializing in website design, e-commerce development, SEO, IT consulting, and digital transformation.",
    foundingLocation: {
      "@type": "Place",
      name: "Lagos, Nigeria",
    },
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
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/VertexPrimeDigital",
      "https://twitter.com/VDigital20184",
      "https://www.linkedin.com/company/vertexprimedigital",
      "https://www.instagram.com/vertexprimedigital",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Design & Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consulting",
          },
        },
      ],
    },
    knowsAbout: [
      "Web Development",
      "E-commerce Solutions",
      "Search Engine Optimization",
      "Digital Marketing",
      "IT Consulting",
      "Software Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="vertex-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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
