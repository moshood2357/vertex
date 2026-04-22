import type { Metadata } from "next";

import UIUXDesignLanding from "@/components/UiUxDesignLanding";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Vertex Prime Digital",
  description:
    "Get professional UI/UX design services from Vertex Prime Digital. We create intuitive, user-centered designs that improve engagement and conversions. Based in Lagos, serving clients worldwide.",
  keywords: [
    "UI UX design Lagos",
    "product design Nigeria",
    "user experience design",
    "user interface design",
    "digital product design",
    "Vertex Prime Digital UI UX",
  ],
  openGraph: {
    title: "UI/UX Design Services | Vertex Prime Digital",
    description:
      "Design intuitive and engaging user experiences with Vertex Prime Digital. UI/UX solutions tailored for growth and usability.",
    url: "https://vertexprimedigital.com/services/ui-ux-design",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | Vertex Prime Digital",
    description:
      "Improve user experience and conversions with expert UI/UX design.",
  },
  alternates: {
    canonical: "https://vertexprimedigital.com/services/ui-ux-design",
  },
};

export default function Page() {
  return <UIUXDesignLanding />
}
