/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      borderRadius: {
        'half': '50%',
      },
     colors: {
      'BACKGROUND_BLUE': '#00B2FF',
      'BUTTON_GREY': '#D9D9D9',
      
     },
     fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },

    }
   },
  plugins: [],
}

