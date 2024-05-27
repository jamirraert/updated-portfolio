/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '768px'},  
      'lg': '1024px',  
      'xl': '1280px',  
    },
    extend: {
      colors: {
        primary: '#eece1a',
        '444': '#444',
        '3737': '#373737',
        '515': '#515151',
        'c4': '#c4c4c4',
        '333':'#333'
      },
      rotate: {
        '180': '180deg',
        '45': '45deg',
        '-45': '-45deg'
      }
    },
  },
  plugins: [],
}

