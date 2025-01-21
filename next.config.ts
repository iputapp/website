import NextBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: NextConfig = {
  /** @see {@link https://nextjs.org/docs/app/building-your-application/styling/sass} */
  sassOptions: {
    implementation: "sass-embedded",
    includePaths: [join(__dirname, "src/styles")],
  },
};

/** @see {@link https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling} */
const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? NextBundleAnalyzer({
        enabled: true,
      })
    : (config: NextConfig) => config;

export default withBundleAnalyzer(config);
