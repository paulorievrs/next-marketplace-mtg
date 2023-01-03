const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        '3xl': '0px 7px 20px rgba(0, 0, 0, 0.3)',
        '4xl': '0px 7px 25px rgba(0, 0, 0, 0.4)',
        '5xl': '0px 15px 50px rgba(67, 76, 109, 0.08)'
      },
      backgroundImage: {
        "magic-world": "url('/bgImage.png')",
      }
    },
    colors: {
      primary: '#2a2d46',
      "dark-primary": '#343A62',
      secondary: '#646986',
      info: '#2c3ba0',
      "light-info": '#0c76d8',
      red: '#eb2d66',
      "light-red": 'rgba(235, 45, 102, 0.35)',
      "dark-red": 'rgba(235, 45, 102, 0.719)',
      white: '#fff',
      "light-gray": "#f3f4ff",
      "menu-color": "rgba(0, 0, 0, 0.81)"
    },
    fontFamily: {
      sans: ['var(--font-montserrat)', ...fontFamily.sans],
    },
  },
  plugins: [],
}
