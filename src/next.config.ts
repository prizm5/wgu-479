import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  ...(isProd && {
  basePath: "/wgu-479",
    output: "export",
    experimental: {
      optimizeCss: true,
    },
  }),
};

export default nextConfig;
