const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        gray: colors.gray,
        bgPurple: '#0d0a10',
        vibeRed: '#ff0d20',
      },
      transitionProperty: {
        width: 'width',
      },
      minWidth: {
        10: '2.5rem',
      },
      spacing: {
        card: '143.333337%',
        '1/3': '33.333337%',
      },
      animation: ['motion-safe'],
    },
  },
  variants: {
    extend: {
      borderRadius: ['responsive', 'hover'],
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
      scale: ['active', 'group-hover'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
};
