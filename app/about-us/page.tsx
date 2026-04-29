import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us — Web Design & Development Agency in Lagos, Nigeria",
  description:
    "Learn about Vertex Prime Digital — a Lagos-based web design, development, and digital solutions agency helping businesses across Nigeria and globally build powerful online presences.",
  keywords: [
    "About Vertex Prime Digital",
    "web development company Lagos Nigeria",
    "digital agency Lagos",
    "website design company Nigeria",
    "IT solutions Lagos",
    "web design agency about us",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/about-us",
  },
  openGraph: {
    title: "About Vertex Prime Digital — Web Design Agency in Lagos, Nigeria",
    description:
      "Discover how Vertex Prime Digital delivers innovative web design, development, and digital solutions for businesses in Lagos, Nigeria and worldwide.",
    url: "https://vertexprimedigital.com/about-us",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [
      {
        url: "/tagline4.png",
        width: 1200,
        height: 630,
        alt: "About Vertex Prime Digital — Web Design Agency Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vertex Prime Digital | Web Design Agency Lagos, Nigeria",
    description:
      "Professional web design and digital solutions company based in Lagos, helping businesses grow online.",
  },
};

export default function Page() {
  return <AboutPage />;
}
