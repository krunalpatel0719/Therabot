/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      borderRadius: {
        'half': '50%',
      },
     colors: {
      'BACKGROUND_BLUE': '#00B2FF',
      
     }

    }
   },
  plugins: [],
}

