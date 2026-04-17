import type { Metadata } from "next";

import WebsiteDesignLanding from "@/components/WebsiteDesignAndDevelopmentLanding";

export const metadata: Metadata = {
  title: "Contact Vertex Prime Digital",
  description:
    "Get in touch with Vertex Prime Digital for professional web design, development, and digital solutions. Based in Lagos, Nigeria — serving clients worldwide.",
  keywords: [
    "Contact Vertex Prime Digital",
    "web development company Lagos",
    "digital agency Nigeria",
    "website design consultation",
    "IT solutions Lagos",
    "Vertex Prime Digital contact",
  ],
  openGraph: {
    title: "Contact Vertex Prime Digital",
    description:
      "Start your project with Vertex Prime Digital. Professional web design, development, and digital solutions tailored to your business.",
    url: "https://vertexprimedigital.com/website-design-and-development",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vertex Prime Digital",
    description:
      "Speak with our team about your website or digital project today.",
  },
  alternates: {
    canonical: "https://vertexprimedigital.com/website-design-and-development",
  },
};

export default function Page() {
  return <WebsiteDesignLanding />;
}
