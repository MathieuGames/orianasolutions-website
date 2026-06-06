import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.208", "10.0.0.209", "10.0.0.152", "192.168.18.34"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "antoinebaril.ca" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "witify.imgix.net" },
      { protocol: "https", hostname: "evalplus.ca" },
    ],
  },
};

export default nextConfig;
