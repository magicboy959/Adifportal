import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
    // No external Sanity CDN configured
  }
};

export default nextConfig;
