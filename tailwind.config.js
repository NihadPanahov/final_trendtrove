
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./img/blogbgpic.webp')",
      },
      clipPath: {
        custom: 'polygon(100% 0, 58% 17%, 74% 100%, 30% 100%, 43% 17%, 0% 0%)',
      },
      backgroundColor: {
        light: 'white',
        dark: 'black',
      },
      textColor: {
        light: 'black',
        dark: 'white',
      },
    },
  },
  plugins: [],
};
