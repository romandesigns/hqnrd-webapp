import type { NextConfig } from "next";

/** @type {*} */
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
