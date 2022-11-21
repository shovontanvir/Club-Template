/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgHome': '#1E232B',
        'brand': '#C89538',
        'subBrand': '#AB815A',
        'about': '#F1EBE2',
      },
      fontFamily: {
        brand: ["Essonnes Display", "sans"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('./images/header1.jpg')",
        'footer-bg': "url('./images/footer-bg.jpg')",
        'classic': "url('./images/bg-classic.png')",
        'menu': "url('./images/menu-bg.png')",
        'sports': "url('./images/sports.png')",
        'fnb': "url('./images/fnb.png')",
        'events': "url('./images/bgevent.png')",
        'eventdetails': "url('./images/bgeventdetails.png')",
      }
    },
  },
  plugins: [],
}
