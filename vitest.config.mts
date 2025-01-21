import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
/** @see {@link https://nextjs.org/docs/app/building-your-application/testing/vitest} */
  plugins: [tsconfigPaths(), react()],
  /** @see {@link https://vitest.dev/config} */
  test: {
    environment: "jsdom",
    include: [
      "test/**/*.test.{js,ts,jsx,tsx}",
      "src/**/*.test.{js,ts,jsx,tsx}",
    ],
    globals: true,
  },
});
