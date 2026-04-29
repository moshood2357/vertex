import type { Metadata } from "next";
import CustomDigitalSolutions from "@/components/custom-digital-solutions";

export const metadata: Metadata = {
  title: "Custom Digital Solutions & Web Applications in Lagos, Nigeria",
  description:
    "Vertex Prime Digital delivers tailored digital solutions including custom web applications, enterprise systems, SaaS platforms, and workflow automation for businesses in Lagos and Nigeria.",
  keywords: [
    "custom digital solutions Lagos",
    "custom web applications Nigeria",
    "enterprise software development Lagos",
    "SaaS development Nigeria",
    "workflow automation Lagos",
    "bespoke software Nigeria",
    "custom business software Lagos",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/services/custom-digital-solutions",
  },
  openGraph: {
    title: "Custom Digital Solutions in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "Tailored digital systems and scalable web applications built for businesses in Lagos and Nigeria to solve complex challenges and accelerate growth.",
    url: "https://vertexprimedigital.com/services/custom-digital-solutions",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [
      {
        url: "/tagline4.png",
        width: 1200,
        height: 630,
        alt: "Custom Digital Solutions Lagos Nigeria — Vertex Prime Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Digital Solutions Lagos | Vertex Prime Digital",
    description:
      "Bespoke web applications, enterprise systems, and automation built for Nigerian businesses.",
  },
};

export default function Page() {
  return <CustomDigitalSolutions />;
}
