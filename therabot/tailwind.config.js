/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {

    extend: {
      scale: {
        '80': '.80',
      },
      scrollbar: ['rounded', 'dark'],
      borderRadius: {
        'half': '50%',
      },
     colors: {
      'BACKGROUND_BLUE': '#00B2FF',
      'DARK_BACKGROUND_BLUE': '#11B7FF',
      'BUTTON_GREY': '#D9D9D9',
      'ECLIPSE_BLUE': '#007C97',
      'DARK_ECLIPSE_BLUE': '#011E24',
      'CONTACT_THERAPIST_BUTTON_BLUE': '#B2EDFF',
      'NOTIFICATIONS_GRADIENT': '#85B48A',
      'NOTIFICATIONS_ECLIPSE': "#62FF71",
      'NOTES_GRADIENT': "#85B4AE",
      'NOTES_ECLIPSE': "#19665C",
      'NOTES_BUTTON': "#19665C",
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
   plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}

