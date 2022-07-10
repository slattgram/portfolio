/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#F2F1F7',
        'system-blue' : '#007AFF',
        'accent-green' : '#BEF1C7',
        'grey' : '#D9D9D9',
        'dark-grey' : '#999999'
      },
      spacing:{
        'regular' : '1.083rem',
        'x-offset' : '1.375rem',
        'desktop' : '60.625rem'
      },
      maxWidth:{
        'desktop' : '60.625rem'
      },
      fontSize:{
        'base': ['17px','20.57px'],
        'h3': ['19px','23px'],
        'h2': ['28px','34px'],
        'h1': ['52px', '63px']
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}