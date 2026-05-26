import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#B8960C",
        silver: "#C0C0C0",
        "dark-bg": "#0D0D0D",
        "dark-card": "#1A1A1A",
        "dark-border": "#2A2A2A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-noto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
