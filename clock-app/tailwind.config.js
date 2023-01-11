/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dayMobile': "url('assets/mobile/bg-image-daytime.png')",
        'dayTablet': "url('assets/tablet/bg-image-daytime.png')",
        'dayDesktop': "url('assets/desktop/bg-image-daytime.png')",
        'nightMobile': "url('assets/mobile/bg-image-nighttime.png')",
        'nightTablet': "url('assets/tablet/bg-image-nighttime.png')",
        'nightDesktop': "url('assets/desktop/bg-image-nighttime.png')"
      }
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick SVG
    },
  },
  plugins: [],
}