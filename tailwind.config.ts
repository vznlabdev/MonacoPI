import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: '#070d3f',
          light: '#0f1a5f',
          lighter: '#1a2780',
        },
        cream: {
          DEFAULT: '#fef3e9',
          dark: '#f5e6d0',
        },
      },
    },
  },
  plugins: [],
};
export default config;

