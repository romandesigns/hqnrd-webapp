import type { NextConfig } from "next";

/** @type {*} */
const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "uncommon-loris-522.convex.cloud" },
    ],
  },
};

export default nextConfig;
