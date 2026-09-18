// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070b14",
          900: "#0b132b",
          800: "#1c2541",
          700: "#3a506b",
        },
        orange: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
