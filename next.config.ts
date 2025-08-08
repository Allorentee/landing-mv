import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Asegura que el sitemap se genere correctamente
    typedRoutes: true,
  },
};

export default nextConfig;
