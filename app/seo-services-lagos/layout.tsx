import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SEO Services in Lagos Nigeria | Professional Google Ranking & Organic Growth",

  description:
    "Get professional SEO services in Lagos Nigeria. We help businesses rank on Google, increase organic traffic, and generate consistent leads through proven on-page, off-page, and technical SEO strategies.",

  keywords: [
    "SEO services in Lagos",
    "SEO agency Nigeria",
    "Google ranking Lagos",
    "SEO expert Nigeria",
    "affordable SEO services Lagos",
    "local SEO Nigeria",
    "website ranking Lagos Nigeria",
    "organic traffic growth Nigeria",
    "technical SEO services",
    "on-page SEO optimization Lagos",
    "off-page SEO Nigeria",
    "small business SEO Lagos",
  ],

  authors: [{ name: "Vertex Prime Digital" }],
  creator: "Vertex Prime Digital",
  publisher: "Vertex Prime Digital",

  metadataBase: new URL("https://vertexprimedigital.com"),

  alternates: {
    canonical: "/seo-services-lagos",
  },

  openGraph: {
    title: "SEO Services in Lagos | Rank Your Website on Google",
    description:
      "Professional SEO services in Lagos Nigeria to help your business rank higher on Google, attract organic traffic, and generate consistent leads.",
    url: "https://vertexprimedigital.com/seo-services-lagos",
    siteName: "Vertex Prime Digital",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/tagline3.png",
        width: 1200,
        height: 630,
        alt: "SEO Services in Lagos Nigeria - Vertex Prime Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Lagos Nigeria | Rank on Google Faster",
    description:
      "Boost your Google rankings and grow organic traffic with professional SEO services in Nigeria.",
    images: ["/tagline3.png"],
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

  category: "marketing",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
