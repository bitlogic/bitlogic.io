import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El repo tiene el sitio Gatsby viejo en la raíz con su propio yarn.lock.
  // Sin esto Next infiere la raíz del monorepo ahí arriba y traza archivos
  // que no son de esta app.
  outputFileTracingRoot: path.join(import.meta.dirname, "."),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["gsap", "three"],
  },
  async headers() {
    return [
      {
        // Los crawlers generativos leen estos archivos: que no los cachee
        // un intermediario más de un día.
        source: "/:path(llms.txt|llms-full.txt)",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
