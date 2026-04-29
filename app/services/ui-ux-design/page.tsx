import UIUXDesignClient from "@/components/Ui-Ux-designClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services in Lagos, Nigeria",
  description:
    "Professional UI/UX design services by Vertex Prime Digital. We craft intuitive, user-centered digital experiences for businesses in Lagos and Nigeria that improve engagement and conversions.",
  keywords: [
    "UI UX design Lagos",
    "UX designer Nigeria",
    "user interface design Lagos",
    "user experience design Nigeria",
    "product design Lagos",
    "app design Nigeria",
    "digital product design Lagos",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/services/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Design Services in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "User-focused UI/UX design services in Lagos that enhance usability, engagement, and conversion rates for Nigerian businesses.",
    url: "https://vertexprimedigital.com/services/ui-ux-design",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [{ url: "/tagline4.png", width: 1200, height: 630, alt: "UI UX Design Lagos Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design in Lagos, Nigeria | Vertex Prime Digital",
    description: "Intuitive, conversion-focused UI/UX design for Lagos businesses and startups.",
  },
};

export default function Page() {
  return <UIUXDesignClient />;
}
