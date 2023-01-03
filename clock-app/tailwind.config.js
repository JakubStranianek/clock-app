/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-dayMobile': "url('assets/mobile/bg-image-daytime.jpg')",
        'bg-dayTablet': "url('assets/tablet/bg-image-daytime.jpg')",
        'bg-dayDesktop': "url('assets/desktop/bg-image-daytime.jpg')",
        'bg-nightMobile': "url('assets/mobile/bg-image-nighttime.jpg')",
        'bg-nightTablet': "url('assets/tablet/bg-image-nighttime.jpg')",
        'bg-nightDesktop': "url('assets/desktop/bg-image-nighttime.jpg')"
      }
    },
  },
  plugins: [],
}