import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vertexprimedigital.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Core pages
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Landing pages (high priority — these target specific search queries)
    {
      url: `${baseUrl}/website-design-and-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Individual service pages
    {
      url: `${baseUrl}/services/website-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/ecommerce-solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/seo-optimization`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/website-maintenance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/custom-digital-solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ROI Calculators (great for long-tail SEO)
    {
      url: `${baseUrl}/ROI/website-development-roi-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ROI/ui-ux-design-roi-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    // Legal
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
