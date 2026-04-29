import WebsiteMaintenance from "@/components/website-maintenance";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance & Support Services in Lagos, Nigeria",
  description:
    "Professional website maintenance services by Vertex Prime Digital. Security updates, performance optimization, backups, and ongoing technical support for businesses in Lagos and Nigeria.",
  keywords: [
    "website maintenance Lagos",
    "website support Nigeria",
    "website security updates Lagos",
    "website backup services Nigeria",
    "technical website support Lagos",
    "website management Nigeria",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/services/website-maintenance",
  },
  openGraph: {
    title: "Website Maintenance & Support in Lagos, Nigeria | Vertex Prime Digital",
    description:
      "Reliable website maintenance and support services in Lagos including updates, security monitoring, backups, and performance optimization.",
    url: "https://vertexprimedigital.com/services/website-maintenance",
    siteName: "Vertex Prime Digital",
    type: "website",
    images: [{ url: "/tagline4.png", width: 1200, height: 630, alt: "Website Maintenance Lagos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Maintenance Services Lagos | Vertex Prime Digital",
    description: "Keep your website secure, fast, and reliable with our Lagos-based support team.",
  },
};

export default function Page() {
  return <WebsiteMaintenance />;
}
