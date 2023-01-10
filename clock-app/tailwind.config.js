/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dayMobile': "url('assets/mobile/bg-image-daytime.jpg')",
        'dayTablet': "url('assets/tablet/bg-image-daytime.jpg')",
        'dayDesktop': "url('assets/desktop/bg-image-daytime.jpg')",
        'nightMobile': "url('assets/mobile/bg-image-nighttime.jpg')",
        'nightTablet': "url('assets/tablet/bg-image-nighttime.jpg')",
        'nightDesktop': "url('assets/desktop/bg-image-nighttime.jpg')"
      }
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick SVG
    },
  },
  plugins: [],
}