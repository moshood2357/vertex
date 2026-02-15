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
  metadataBase: new URL("https://vertexprimedigital.com"),

  title: {
    default:
      "Vertex Prime Digital | Web Design and Development company in Lagos, Nigeria",
    template: "%s | Vertex Prime Digital",
  },

  description:
    "Vertex Prime Digital is a performance-driven web design and development agency helping ambitious brands in Lagos and globally build scalable, SEO-optimized digital systems and high-converting e-commerce platforms.",

  applicationName: "Vertex Prime Digital",

  keywords: [
    "Website Development Company",
    "Website design and development services",
    "Website design and development company",
    "website design and development agency",
    "digital agency in lagos",
    "africa digital agency",
    "web design and development company in nigeria",
    "web design and development company in lagos",
    "web design and development company in lagos nigeria",
    "website development agency Nigeria",
    "best web development company in Lagos",
    "web design company near me",
    "web development company near me",
    "affordable website design nigeria",
    "ecommerce website developers near me",
    "Performance-Driven Web & E-commerce Development for Growing Businesses",
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
    "Digital Agency Lagos",
    "top-notch web development services",
    "custom web services in lagos",
    "custom web services in nigeria",
    "Vertex Prime Digital",
    "professional web development",
    "website development",
    "custom web solutions",
    "web design",
    "app design",
    "software development",
    "website design",
    "web development company",
    // "app developers Nigeria",
    "custom software",
    // "SaaS development",
    // "AI website solutions",
    "e - commerce website design",
    "business website development",
    "tech company Nigeria",
    "Nigeria Web Developer",
    "Web Developer Lagos",
  ],

  authors: [{ name: "Vertex Prime Digital" }],
  creator: "Vertex Prime Digital",
  publisher: "Vertex Prime Digital",

  viewport: {
    width: "device-width",
    initialScale: 1,
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

  alternates: {
    canonical: "https://vertexprimedigital.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "Vertex Prime Digital | Website Design, Development & Digital Solutions Agency",
    description:
      "Professional website development, e-commerce solutions, SEO, and digital systems built for performance, scalability, and measurable business growth.",
    url: "https://vertexprimedigital.com",
    siteName: "Vertex Prime Digital",
    images: [
      {
        url: "/tagline4.png",
        width: 1200,
        height: 630,
        alt: "Vertex Prime Digital - Web Design & Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vertex Prime Digital | Website Design, Development & Digital Solutions Agency",
    description:
      "Custom websites, scalable e-commerce platforms, SEO, and digital solutions built for ambitious brands.",
    images: ["/tagline4.png"],
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
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vertexprimedigital.com/#organization",
        name: "Vertex Prime Digital",
        url: "https://vertexprimedigital.com",
        logo: "https://vertexprimedigital.com/nakedlogo.png",
        image: "https://vertexprimedigital.com/tagline4.png",
        description:
          "Vertex Prime Digital is a performance-driven web design and development agency delivering scalable digital systems, high-converting websites, and e-commerce platforms.",
        email: "vertexprimedigital@gmail.com",
        telephone: "+2349038979339",
        sameAs: [
          "https://www.facebook.com/vertexprimedigital",
          "https://twitter.com/VDigital20184",
          "https://www.linkedin.com/company/vertexprimedigital",
          "https://www.instagram.com/vertexprimedigital",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://vertexprimedigital.com/#localbusiness",
        name: "Vertex Prime Digital",
        image: "https://vertexprimedigital.com/tagline4.png",
        telephone: "+2349038979339",
        email: "vertexprimedigital@gmail.com",
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
        areaServed: [
          {
            "@type": "Country",
            name: "Nigeria",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+2349038979339",
          contactType: "customer support",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
        parentOrganization: {
          "@id": "https://vertexprimedigital.com/#organization",
        },
      },

      {
        "@type": "ProfessionalService",
        "@id": "https://vertexprimedigital.com/#professionalservice",
        name: "Web Design & Development Services",
        provider: {
          "@id": "https://vertexprimedigital.com/#organization",
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
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
          "Web Design",
          "IT Consulting",
          "Software Development",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data */}
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
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EN90EKMNGW');
          `}
        </Script>

        {/* Tawk.to Live Chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/698443eeb35c9b1c2f681075/1jgmaint8';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
