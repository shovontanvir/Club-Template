/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {
      colors: {
        'bgHome': '#1E232B',
        'brand': '#C89538',
        'subBrand': '#AB815A',
        'about': '#F1EBE2',
      },
      boxShadow: {
        'custom': '0px 0px 8px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        brand: ["Essonnes Display", "sans"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/backgrounds/header1.jpg')",
        'footer-bg': "url('../src/assets/images/backgrounds/footer-bg.jpg')",
        'classic': "url('../src/assets/images/backgrounds/bg-classic.png')",
        'menu': "url('../src/assets/images/backgrounds/menu-bg.png')",
        'sports': "url('../src/assets/images/backgrounds/sports.png')",
        'fnb': "url('../src/assets/images/backgrounds/fnb.png')",
        'events': "url('../src/assets/images/backgrounds/bgevent.png')",
        'eventdetails': "url('../src/assets/images/backgrounds/bgeventdetails.png')",
        'feature': "url('../src/assets/images/backgrounds/feature.png')",
        'container': "url('../src/assets/images/backgrounds/container.png')",
      }},
    },
    plugins: [],
  }