/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: 'var(--primary-500)',
      secondary: 'var(--red-500)',
    },
    fontFamily: {},
    fontSize: {
      xs: '0.85em',
      s: '0.9em',
      m: '1em',
      l: '1.15em',
      xl: '1.30em',
      xxl: '1.5em',
    },
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
};
