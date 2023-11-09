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
      'NOTIFICATIONS_GRADIENT': '#85B48A',
      'NOTIFICATIONS_ECLIPSE': "#62FF71",
      'NOTES_GRADIENT': "#85B4AE",
      'NOTES_ECLIPSE': "#19665C",
      'EXERCISES_GRADIENT': "#B7902E",
      'EXERCISES_ECLIPSE': "#745300",
      'SETTINGS_GRADIENT': "#C892FF",
      'SETTINGS_ECLIPSE': "#D662FF",
      
     },
     fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },

    }
   },
  plugins: [],
}

