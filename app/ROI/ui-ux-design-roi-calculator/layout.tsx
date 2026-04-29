import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design ROI Calculator — Measure the Value of Better Design | Lagos",
  description:
    "Use our free UI/UX design ROI calculator to measure the business impact of investing in better user experience. Ideal for startups and businesses in Lagos and Nigeria.",
  keywords: [
    "UI UX ROI calculator",
    "UX design investment return",
    "UI design ROI Nigeria",
    "UX value calculator Lagos",
    "design investment calculator Nigeria",
  ],
  alternates: {
    canonical: "https://vertexprimedigital.com/ROI/ui-ux-design-roi-calculator",
  },
  openGraph: {
    title: "UI/UX Design ROI Calculator | Vertex Prime Digital",
    description:
      "Calculate the return on investment for UI/UX design improvements. Free tool for Lagos businesses.",
    url: "https://vertexprimedigital.com/ROI/ui-ux-design-roi-calculator",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
