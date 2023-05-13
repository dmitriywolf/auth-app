/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1960px',
    },
    container: {
      padding: {
        DEFAULT: '1rem', // 16px
        md: '1.5rem', // 24px
        xl: '2rem',
      },
    },
    extend: {
      backgroundImage: {
        // home: "url('/img/main.jpg')",
      },
    },
  },
  plugins: [],
};
