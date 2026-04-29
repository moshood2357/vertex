import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development ROI Calculator — Is a New Website Worth It? | Lagos",
  description:
    "Use our free website development ROI calculator to estimate the return on investment from a new website. Built for businesses in Lagos, Nigeria. Calculate revenue impact, cost savings, and growth potential.",
  keywords: [
    "website ROI calculator",
    "website development cost Nigeria",
    "website investment return Lagos",
    "is a website worth it Nigeria",
    "web development ROI Lagos",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/ROI/website-development-roi-calculator",
  },
  openGraph: {
    title: "Website Development ROI Calculator | Vertex Prime Digital",
    description:
      "Calculate the return on investment for your new website. Free tool for Lagos and Nigerian businesses.",
    url: "https://vertexprimedigital.com/ROI/website-development-roi-calculator",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
