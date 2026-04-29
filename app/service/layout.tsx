import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Web Design, SEO & Digital Solutions in Lagos",
  description:
    "Explore Vertex Prime Digital's full range of services: website design & development, e-commerce solutions, UI/UX design, SEO optimization, and website maintenance — serving Lagos, Nigeria and beyond.",
  keywords: [
    "web design services Lagos",
    "website development services Nigeria",
    "SEO services Lagos",
    "e-commerce development Nigeria",
    "UI UX design Lagos",
    "digital agency services Lagos",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/service",
  },
  openGraph: {
    title: "Our Services — Web Design, SEO & Digital Solutions in Lagos | Vertex Prime Digital",
    description:
      "From websites to SEO and e-commerce, Vertex Prime Digital delivers performance-driven digital services for businesses in Lagos and globally.",
    url: "https://vertexprimedigital.com/service",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Vertex Prime Digital",
    description:
      "Web design, development, SEO & digital solutions for ambitious brands in Lagos, Nigeria.",
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
