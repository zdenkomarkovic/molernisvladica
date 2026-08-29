import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode za React - hvata potencijalne probleme ranije
  reactStrictMode: true,

  // Ne odaje da je sajt pravljen u Next.js
  poweredByHeader: false,

  // Optimizacija slika
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Primer:
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },

  // Headers za bolju sigurnost i keširanje
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Dugotrajno keširanje za statичke slike u /public
        source:
          "/:path*.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
