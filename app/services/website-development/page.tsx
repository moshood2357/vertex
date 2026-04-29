import WebsiteDevelopmentClient from "@/components/WebsiteDevelopmentClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Development Company in Lagos, Nigeria",
  description:
    "High-performance, responsive website design and development services by Vertex Prime Digital. We build scalable, SEO-friendly websites for businesses in Lagos and Nigeria.",
  keywords: [
    "website development Lagos",
    "web development company Lagos",
    "website design Nigeria",
    "responsive websites Lagos",
    "SEO-friendly web design Nigeria",
    "Next.js development Lagos",
    "custom website Lagos",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/services/website-development",
  },
  openGraph: {
    title: "Website Design & Development Company in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "Professional website development services in Lagos: scalable, SEO-friendly, responsive, and tailored for growth.",
    url: "https://vertexprimedigital.com/services/website-development",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [{ url: "/tagline4.png", width: 1200, height: 630, alt: "Website Development Lagos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development in Lagos, Nigeria | Vertex Prime Digital",
    description: "Scalable, SEO-friendly websites built for Lagos businesses and brands worldwide.",
  },
};

export default function Page() {
  return <WebsiteDevelopmentClient />;
}
