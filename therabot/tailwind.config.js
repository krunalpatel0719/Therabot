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
      'ECLIPSE_BLUE': '#007C97',
      'CONTACT_THERAPIST_BUTTON_BLUE': '#B2EDFF',
      
     },
     fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },

    }
   },
  plugins: [],
}

