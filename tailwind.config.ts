import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        dark: {
          100: '#00FFF8',
          200: '#8BACD9',
          300: '#2E405A',
          400: '#15263F',
          500: '#0D192C',
          600: '#000000',
        },
        light: {
          100: '#FFFFFF',
        },
      },
      opacity: {
        50: '0.50',
      },
      fontSize: {},
      fontFamily: {},
      boxShadow: {
        card: '0px 25px 50px 0px rgba(0, 0, 0, 0.10)',
      },
      backgroundImage: {},
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
