import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://vertexprimedigital.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/", 
          "/about-us", 
          "/services", 
          "/service", 
          "/contact-us", 
          "/privacy-policy"
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        crawlDelay: 2,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}