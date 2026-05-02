import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web Design Company in Lagos Nigeria | Get More Customers with High-Converting Websites",

  description:
    "Looking for a reliable web design company in Lagos? Vertex Prime Digital builds fast, SEO-optimized websites that generate leads and increase sales for Nigerian businesses. Get a free consultation today.",

  keywords: [
    "web design company Lagos Nigeria",
    "website design Lagos",
    "web development Nigeria",
    "affordable web design Lagos",
    "best web designers in Lagos",
    "professional website developers Nigeria",
    "ecommerce website design Nigeria",
    "small business website Lagos",
    "SEO web design Nigeria",
    "custom website development Lagos",
  ],

  authors: [{ name: "Vertex Prime Digital" }],
  creator: "Vertex Prime Digital",
  publisher: "Vertex Prime Digital",
  applicationName: "Vertex Prime Digital",

  metadataBase: new URL("https://vertexprimedigital.com"),

  alternates: {
    canonical: "/web-design-lagos",
  },

  openGraph: {
    title: "Top Web Design Company in Lagos | Vertex Prime Digital",
    description:
      "We design fast, modern, and SEO-optimized websites that help Lagos businesses attract customers and grow revenue.",
    url: "https://vertexprimedigital.com/web-design-lagos",
    siteName: "Vertex Prime Digital",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://vertexprimedigital.com/tagline3.png",
        width: 1200,
        height: 630,
        alt: "Web Design Company in Lagos - Vertex Prime Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Lagos Nigeria",
    description:
      "Build a high-converting website for your business. Get more customers with our expert web design services.",
    images: ["https://vertexprimedigital.com/tagline3.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "technology",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
