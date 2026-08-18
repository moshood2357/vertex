
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
 
  async rewrites() {
    return [
      {
        // Proxy /blog to the Flask app on WhoGoHost. The Flask app now
        // natively serves everything under /blog (url_prefix="/blog" +
        // static_url_path="/blog/static"), so this is a straight 1:1
        // pass-through — no path-stripping needed.
        source: "/blog",
        destination: "https://blog.vertexprimedigital.com/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://blog.vertexprimedigital.com/blog/:path*",
      },
    ];
  },
};
 
export default nextConfig;