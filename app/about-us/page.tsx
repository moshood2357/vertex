import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Vertex Prime Digital | Web Design, Development & Digital Solutions",
  description:
    "Learn more about Vertex Prime Digital – a leading web design, development, and digital solutions company helping businesses grow online.",
  keywords: [
    "About Vertex Prime Digital",
    "web development company in Nigeria",
    "digital agency Lagos",
    "website design company",
    "IT solutions company",
  ],
  openGraph: {
    title: "About Vertex Prime Digital",
    description:
      "Discover how Vertex Prime Digital delivers innovative web design, development, and digital solutions for businesses worldwide.",
    url: "https://www.vertexprimedigital.com/about-us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vertex Prime Digital",
    description:
      "Professional web design and digital solutions company helping businesses grow.",
  },
};

export default function Page() {
  return <AboutPage />;
}
