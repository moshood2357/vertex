import WebsiteDevelopmentROICalculator from "@/components/ROICalculator/WebDevROI";

export const metadata = {
  title: "Website ROI Calculator | Vertex Prime Digital",
  description:
    "Estimate how much revenue your business can generate from a new or improved website. Built by Vertex Prime Digital.",
  keywords: [
    "website ROI calculator",
    "website revenue calculator",
    "website conversion calculator",
    "digital marketing ROI tool",
    "Vertex Prime Digital",
  ],
  openGraph: {
    title: "Website ROI Calculator | Vertex Prime Digital",
    description:
      "Calculate the potential return on investment from your website design or development project.",
    url: "https://vertexprimedigital.com/tools/website-development-roi-calculator",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
};

export default function Page() {
  return <WebsiteDevelopmentROICalculator />;
}
