import WebsiteMaintenance from "@/components/website-maintenance";

export const metadata = {
  title: "Website Maintenance & Support in Lagos, Nigeria | Vertex Prime Digital",
  description:
    "Professional website maintenance services by Vertex Prime Digital. We provide security updates, performance optimization, backups, and ongoing technical support to keep your website secure and running smoothly.",
  keywords: [
    "website maintenance services",
    "website support Lagos",
    "website security updates Nigeria",
    "website backup services",
    "technical website support",
    "Vertex Prime Digital maintenance",
  ],
  openGraph: {
    title: "Website Maintenance & Support | Vertex Prime Digital",
    description:
      "Reliable website maintenance and support services including updates, security monitoring, backups, and performance optimization.",
    url: "https://www.vertexprimedigital.com/services/website-maintenance",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
};

export default function Page() {
  return <WebsiteMaintenance />;
}
