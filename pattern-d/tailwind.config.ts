import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1A1A2E",
        "navy-light": "#252545",
        "navy-border": "#2E2E50",
        gold: "#C9A84C",
        "gold-light": "#E8C97A",
        cream: "#F5F0E8",
        "cream-dark": "#E8DDD0",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-noto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
