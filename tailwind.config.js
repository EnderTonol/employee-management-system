const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-ribbon': {
          '50': '#edf6ff',
          '100': '#d7eaff',
          '200': '#b9dbff',
          '300': '#88c6ff',
          '400': '#50a7ff',
          '500': '#2881ff',
          '600': '#0f5fff',
          '700': '#0a4aeb',
          '800': '#0f3cbe',
          '900': '#133895',
          '950': '#11235a',
        },
        'tangerine': {
          '50': '#fffbec',
          '100': '#fff5d3',
          '200': '#ffe8a5',
          '300': '#ffd66d',
          '400': '#ffb832',
          '500': '#ffa00a',
          '600': '#ff8800',
          '700': '#cc6402',
          '800': '#a14d0b',
          '900': '#82410c',
          '950': '#461f04',
        },
        'red': {
          '50': '#fff0f1',
          '100': '#ffdddf',
          '200': '#ffc0c4',
          '300': '#ff949b',
          '400': '#ff5762',
          '500': '#ff2332',
          '600': '#ff0011',
          '700': '#d7000e',
          '800': '#b1030f',
          '900': '#920a13',
          '950': '#500005',
        },


      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}