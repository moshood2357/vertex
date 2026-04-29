import type { Metadata } from "next";
import UIUXDesignLanding from "@/components/UiUxDesignLanding";

export const metadata: Metadata = {
  title: "UI/UX Design Agency in Lagos, Nigeria | Vertex Prime Digital",
  description:
    "Get professional UI/UX design services from Vertex Prime Digital in Lagos, Nigeria. We create intuitive, user-centered designs that improve engagement and conversions for Nigerian businesses and beyond.",
  keywords: [
    "UI UX design Lagos",
    "product design Nigeria",
    "user experience design Lagos",
    "user interface design Nigeria",
    "digital product design Lagos",
    "UX agency Nigeria",
    "app UI design Lagos",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Design Agency in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "Design intuitive and engaging user experiences with Vertex Prime Digital in Lagos. UI/UX solutions tailored for growth and usability.",
    url: "https://vertexprimedigital.com/ui-ux-design",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [
      {
        url: "/tagline4.png",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Agency Lagos Nigeria — Vertex Prime Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "Improve user experience and conversions with expert UI/UX design from Lagos.",
  },
};

export default function Page() {
  return <UIUXDesignLanding />;
}
