import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Development ROI Calculator (Nigeria) — Is a New Website Worth It in Lagos?",

  description:
    "Free Website ROI Calculator for Nigerian businesses. Estimate how much revenue a new website can generate in Lagos. Calculate conversion improvements, cost savings, and long-term business growth before investing.",

  keywords: [
    "website ROI calculator Nigeria",
    "website development ROI Lagos",
    "is a website worth it Nigeria",
    "cost of building a website in Nigeria",
    "website investment return Lagos",
    "how much does a website increase sales",
    "web design ROI Nigeria",
    "business website benefits Nigeria",
    "website conversion rate improvement calculator",
    "ROI of web development Africa",
  ],

  authors: [{ name: "Vertex Prime Digital" }],
  creator: "Vertex Prime Digital",
  publisher: "Vertex Prime Digital",

  alternates: {
    canonical:
      "https://vertexprimedigital.com/ROI/website-development-roi-calculator",
  },

  openGraph: {
    title: "Website ROI Calculator for Lagos Businesses | Vertex Prime Digital",
    description:
      "Find out if investing in a new website is worth it. Use our free ROI calculator designed for Nigerian businesses.",
    url: "https://vertexprimedigital.com/ROI/website-development-roi-calculator",
    siteName: "Vertex Prime Digital",
    type: "website",
    locale: "en_NG",
  },

  twitter: {
    card: "summary_large_image",
    title: "Website ROI Calculator — Nigeria & Lagos Businesses",
    description:
      "Calculate how much revenue a new website can generate for your business.",
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

  category: "technology",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
