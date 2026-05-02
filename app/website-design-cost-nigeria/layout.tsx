import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Design Cost in Nigeria (2026 Guide) | Lagos Pricing Breakdown",

  description:
    "How much does a website cost in Nigeria in 2026? Get a detailed breakdown of website pricing in Lagos including business websites, ecommerce stores, and custom web applications. Compare real costs and avoid overpaying.",

  keywords: [
    "website design cost Nigeria",
    "website pricing Lagos",
    "how much does a website cost in Nigeria",
    "web design price Nigeria",
    "cost of building a website in Lagos",
    "ecommerce website cost Nigeria",
    "business website price Nigeria",
    "affordable website development Lagos",
    "custom website cost Nigeria",
    "website development pricing Africa",
  ],

  authors: [{ name: "Vertex Prime Digital" }],
  creator: "Vertex Prime Digital",
  publisher: "Vertex Prime Digital",

  metadataBase: new URL("https://vertexprimedigital.com"),

  alternates: {
    canonical: "/website-design-cost-nigeria",
  },

  openGraph: {
    title:
      "Website Design Cost in Nigeria (2026 Guide) | Real Pricing Breakdown",

    description:
      "Discover how much websites cost in Nigeria. Compare pricing for business websites, ecommerce stores, and custom development in Lagos.",

    url: "https://vertexprimedigital.com/website-design-cost-nigeria",

    siteName: "Vertex Prime Digital",
    type: "website",
    locale: "en_NG",

    images: [
      {
        url: "https://vertexprimedigital.com/tagline3.png",
        width: 1200,
        height: 630,
        alt: "Website Design Cost in Nigeria Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Design Cost in Nigeria (2026 Guide)",
    description:
      "Full breakdown of website pricing in Nigeria — business, ecommerce, and custom websites.",
    images: ["https://vertexprimedigital.com/tagline3.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "business",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
