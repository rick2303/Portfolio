/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1B3C53',
          secondary: '#456882',
          tertiary: '#142b3d',
          font: '#c6e0f1',
          font_primary: '#f3f8fc'
        },
        light: {
          primary: '#D2C1B6',
          secondary: '#F9F3EF',
          tertiary: '#c6b1a3',
          background: '#f4efec'
        },
      },
    },
  },
  plugins: [],
};

