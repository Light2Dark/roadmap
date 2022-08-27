/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-cream": "#fdf0d5",
        "med-red": "#c1121f",
        "dark-red": "#780000",
        "pale-blue": "#669bbc",
        "dark-blue": "#003049"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
