/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      white: '#ffffff',
      black: '#000000',
      primary: 'var(--primary-500)',
      secondary: 'var(--red-500)',
    },
    fontFamily: {},
    fontSize: {
      xs: ['0.85em', '1.15em'],
      s: ['0.9em', '1.2em'],
      m: ['1em', '1.3em'],
      l: ['1.15em', '1.15em'],
      xl: ['1.30em', '1.3em'],
      xxl: ['1.5em', '1.2em'],
    },
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
};
