import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.vertexprimedigital.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about-us", "/services", "/service", "/contact-us", "/privacy-policy"],
        // optional: control bot crawl speed
        crawlDelay: 1, // in seconds
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl, // specifies preferred domain
  };
}
