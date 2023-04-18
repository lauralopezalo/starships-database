/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sw-black': '#101111',
        'sw-dark': '#1D1E1F',
        'sw-yellow': '#EBD800',
        'sw-grey': '#484848',
      },
    },
    
  },
  plugins: [],
}
