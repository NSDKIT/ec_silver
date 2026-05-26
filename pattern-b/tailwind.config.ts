import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#111111",
        "brand-gray": "#888888",
        "brand-light": "#F5F5F5",
        "brand-border": "#E0E0E0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
