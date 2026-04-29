import SeoOptimization from "@/components/Seo-optimisation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services in Lagos, Nigeria — Drive More Organic Traffic",
  description:
    "Professional SEO and website optimization services by Vertex Prime Digital. We improve Google rankings, increase organic traffic, and boost performance for businesses in Lagos and Nigeria.",
  keywords: [
    "SEO services Lagos",
    "search engine optimization Nigeria",
    "technical SEO Lagos",
    "SEO agency Lagos Nigeria",
    "website optimization company Lagos",
    "Google ranking Lagos",
    "organic traffic Nigeria",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/services/seo-optimization",
  },
  openGraph: {
    title: "SEO Services in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "Boost your Google visibility and organic traffic with expert SEO services tailored for businesses in Lagos and Nigeria.",
    url: "https://vertexprimedigital.com/services/seo-optimization",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [{ url: "/tagline4.png", width: 1200, height: 630, alt: "SEO Services Lagos Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Lagos, Nigeria | Vertex Prime Digital",
    description: "Drive organic growth with expert SEO strategies built for Nigerian businesses.",
  },
};

export default function Page() {
  return <SeoOptimization />;
}
