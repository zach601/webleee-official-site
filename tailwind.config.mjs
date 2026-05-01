/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#07111f',
        midnight: '#030812',
        electric: '#0b63e5',
        skywash: '#eaf3ff',
        lime: '#8bea45',
        fog: '#f4f7fb',
        line: '#dce5ef',
        slatebody: '#536173',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        agency: '0 24px 80px rgba(3, 8, 18, 0.14)',
        glow: '0 22px 70px rgba(29, 124, 255, 0.22)',
      },
    },
  },
  plugins: [],
};
