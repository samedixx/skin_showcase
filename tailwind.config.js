/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'proton' : {
          900: '#1b1340',
          800: '#291d58',
          button: '#6d4aff',
          textLight: '#ded7ff',
          dark: '#161032',
        },
        'popup': {
          overlay: 'rgba(0, 0, 0, 0.3)'
        },
        "darkmode": {
          900: '#141414'
        },
        "lightmode": {
          900:'#dbdbdb'
        },
        "dor": {
          1000: '#001E28',
          500: '#053c42',
          100: '#2ec193',
          lig: '#f1f3f4'
        } 
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}