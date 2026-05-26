import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        beige: "#E8DDD0",
        terracotta: "#C17B5C",
        "warm-brown": "#7B5E4A",
        "soft-gray": "#9E9082",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-noto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
