module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tmOrange: {
          900: 'hsl(16, 100%, 45%)',
          800: 'hsl(16, 92%, 47%)',
          700: 'hsl(16, 90%, 50%)',
          600: 'hsl(16, 90%, 52%)',
          500: 'hsl(16, 88%, 55%)',
          400: 'hsl(24, 90%, 55%)',
          300: 'hsl(28, 92%, 65%)',
          200: 'hsl(32, 95%, 75%)',
          100: 'hsl(36, 100%, 88%)',
        },
        tmBlue: {
          900: 'hsl(212, 88%, 23%)',
          800: 'hsl(212, 88%, 25%)',
          700: 'hsl(212, 88%, 28%)',
          600: 'hsl(212, 74%, 30%)',
          500: 'hsl(212, 74%, 35%)',
          400: 'hsl(212, 74%,50%)',
          300: 'hsl(213, 88%, 60%)',
          200: 'hsl(216, 88%, 75%)',
          100: 'hsl(220, 88%, 88%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
