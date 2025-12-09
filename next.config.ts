import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    isolatedDevBuild: false,
  },
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
