/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'main': ['Inter', 'sans-serif']
    },
    extend: {
      keyframes: {
        show:{
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        hide: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'}
        },
        blink: {
          '0%': {opacity: '0'},
          '70%': {opacity: '0'},
          '80%': {opacity: '1'},
          '100%': {opacity: '0'}
        }
      },
      animation:{
        'show': 'show 0.5s ease-out',
        'hide': 'hide 0.5s ease-out',
        'blink': 'blink 4s ease-in infinite'
      }
    },
  },
  plugins: [],
  safelist:[
    'animate-show',
    'animate-hide'
  ]
}

