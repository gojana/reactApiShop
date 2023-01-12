/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/carousel1.jpg')",
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  daisyui: {
    themes: [
      {
        claro: {
          primary: '#1EB854',

          secondary: '#1FD65F',

          accent: '#D99330',

          neutral: '#166534',

          'base-100': '#f5f5f4',

          info: '#1c1917',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
      {
        darkForest: {
          primary: '#1EB854',

          secondary: '#1FD65F',

          accent: '#D99330',

          neutral: '#110E0E',

          'base-100': '#1c1917',

          info: '#fff',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
