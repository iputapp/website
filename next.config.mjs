import NextBundleAnalyzer from "@next/bundle-analyzer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {
  /** @see {@link https://nextjs.org/docs/app/building-your-application/styling/sass} */
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  experimental: {
    /** @see {@link https://nextjs.org/docs/app/api-reference/next-config-js/turbo#configuring-webpack-loaders} */
    turbo: {
      rules: {
        "*.scss": {
          loaders: ["sass-loader"],
          as: "*.css",
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
    : (config) => config;

export default withBundleAnalyzer(nextConfig);
