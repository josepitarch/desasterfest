const { withAnimations } = require('animated-tailwindcss')

/** @type {import('tailwindcss').Config} */

module.exports = withAnimations({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD200'
      },
    },
  },
  plugins: [],
})