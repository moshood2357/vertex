import SeoOptimization from "@/components/Seo-optimisation";

export const metadata = {
  title: "SEO & Website Optimization Services in Lagos, Nigeria | Vertex Prime Digital",
  description:
    "Professional SEO and website optimization services by Vertex Prime Digital. We improve search rankings, increase organic traffic, and optimize website performance for measurable business growth.",
  keywords: [
    "SEO services Lagos",
    "search engine optimization Nigeria",
    "technical SEO services",
    "website optimization company",
    "SEO agency in Lagos",
    "Vertex Prime Digital SEO",
  ],
  openGraph: {
    title: "SEO & Website Optimization Services | Vertex Prime Digital",
    description:
      "Boost your visibility, rankings, and organic traffic with expert SEO and performance optimization services tailored for growing businesses.",
    url: "https://vertexprimedigital.com/services/seo-optimization",
    siteName: "Vertex Prime Digital",
    type: "website",
  },
};

export default function Page() {
  return <SeoOptimization />;
}
