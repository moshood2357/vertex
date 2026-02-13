import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compress: true, // Enables gzip compression

  images: {
    formats: ["image/avif", "image/webp"], // Better SEO + performance
    domains: [],
  },

  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // ✅ Add this
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.vertexprimedigital.com",
          },
        ],
        destination: "https://vertexprimedigital.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
