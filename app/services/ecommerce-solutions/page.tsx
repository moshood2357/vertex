import EcommerceSolutions from "@/components/ecommmerce-solutions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Website Development in Lagos, Nigeria",
  description:
    "Custom e-commerce website development by Vertex Prime Digital. We build secure, scalable, conversion-focused online stores for businesses in Lagos and Nigeria that drive real sales.",
  keywords: [
    "e-commerce development Lagos",
    "online store development Nigeria",
    "custom e-commerce website Lagos",
    "Shopify development Nigeria",
    "e-commerce solutions Lagos",
    "online shop development Nigeria",
    "WooCommerce development Lagos",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/services/ecommerce-solutions",
  },
  openGraph: {
    title: "E-Commerce Development in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "Professional e-commerce solutions in Lagos designed for performance, security, and high conversions. Launch and scale your online store with confidence.",
    url: "https://vertexprimedigital.com/services/ecommerce-solutions",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [{ url: "/tagline4.png", width: 1200, height: 630, alt: "E-Commerce Development Lagos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Lagos, Nigeria | Vertex Prime Digital",
    description: "Build and scale your online store with expert e-commerce developers in Lagos.",
  },
};

export default function Page() {
  return <EcommerceSolutions />;
}
