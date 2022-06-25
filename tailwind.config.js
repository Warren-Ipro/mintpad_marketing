/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
