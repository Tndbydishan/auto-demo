import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'var(--font-montserrat)' comes from layout.tsx
        sans: ['var(--font-montserrat)', 'sans-serif'],
        // 'Akira Expanded' comes from globals.css @font-face
        display: ['"Akira Expanded"', 'sans-serif'],
        // Alias for components using font-akira
        akira: ['"Akira Expanded"', 'sans-serif'],
      },
      colors: {
        'auto-red': '#D12027',
        'auto-black': '#121212',
        'auto-white': '#f7f7f5',
      }
    },
  },
  plugins: [],
};
export default config;