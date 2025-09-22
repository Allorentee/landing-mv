import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap-dinamyc",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
