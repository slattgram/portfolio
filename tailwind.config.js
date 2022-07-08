/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#F2F1F7'
      },
      spacing:{
        'regular' : '1.083rem',
        'desktop' : '60.625rem'
      },
      maxWidth:{
        'desktop' : '60.625rem'
      },
      fontSize:{
        'base': ['17px','20.57px']
      }
    }
  },
  plugins: [],
}