/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        'light': 'white',
        'dark': 'black',
      },
      textColor: {
        'light': 'black',
        'dark': 'white',
      },
    },
  },

}