import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
      },
      animation: {
        "line-write": "lineAnimation 1s linear 1",
      },
      keyframes: {
        lineAnimation: {
          "0%": { "stroke-dashoffset": "3000", "stroke-dasharray": "3000" },
          "100%": { "stroke-dashoffset": "0", "stroke-dasharray": "3000" },
        },
      },
      colors: {
        "red": "#FF3B30",
        "orange": "#FF8000",
        "yellow": "#FFD015",
        "greenlight": "#AFDD30",
        "green": "#22C24A",
        "blue-light": "#00BBFF",
        "blue": "#007AFF",
        "navy": "#5A58ED",
        "purple": "#A82EFA",
        "sub-bg": "#FB2568",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
