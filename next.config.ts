import NextBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: NextConfig = {
  /** @see {@link https://nextjs.org/docs/app/building-your-application/styling/sass} */
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    return config
  },
  sassOptions: {
    implementation: "sass-embedded",
    includePaths: [join(__dirname, "src/styles")],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
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
