/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#07111f',
        midnight: '#030812',
        electric: '#1d7cff',
        skywash: '#eaf3ff',
        lime: '#9cff4f',
        fog: '#f4f7fb',
        line: '#dce5ef',
        slatebody: '#536173',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        agency: '0 24px 80px rgba(3, 8, 18, 0.14)',
        glow: '0 22px 70px rgba(29, 124, 255, 0.22)',
      },
    },
  },
  plugins: [],
};
