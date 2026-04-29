import type { Metadata } from "next";
import WebsiteDesignLanding from "@/components/WebsiteDesignAndDevelopmentLanding";

export const metadata: Metadata = {
  title: "Website Design & Development Services in Lagos, Nigeria",
  description:
    "Professional website design and development services by Vertex Prime Digital. We build fast, scalable, SEO-friendly websites for businesses in Lagos, Nigeria and worldwide.",
  keywords: [
    "website design and development Lagos",
    "web design company Nigeria",
    "website development agency Lagos",
    "custom website design Nigeria",
    "professional website development Lagos",
    "Next.js web development Nigeria",
    "responsive website design Lagos",
    "affordable website design Nigeria",
  ],
  openGraph: {
    title: "Website Design & Development Services in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "We build high-performance, scalable websites for businesses in Lagos and beyond. Get a fast, SEO-friendly website that drives real results.",
    url: "https://vertexprimedigital.com/website-design-and-development",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [
      {
        url: "/tagline4.png",
        width: 1200,
        height: 630,
        alt: "Website Design & Development Lagos — Vertex Prime Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development in Lagos | Vertex Prime Digital",
    description:
      "Fast, scalable, SEO-friendly websites built for Lagos businesses and ambitious brands worldwide.",
  },
  alternates: {
    canonical: "https://vertexprimedigital.com/website-design-and-development",
  },
};

export default function Page() {
  return <WebsiteDesignLanding />;
}
