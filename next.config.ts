import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        // Redirect all www except robots.txt
        source: "/:path((?!robots\\.txt).*)",
        has: [
          { type: "host", value: "www.vertexprimedigital.com" },
        ],
        destination: "https://vertexprimedigital.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;