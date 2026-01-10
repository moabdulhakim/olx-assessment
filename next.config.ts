import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  i18n:{
    locales: ["ar", "en"],
    defaultLocale: "en",
  }
};

export default nextConfig;
