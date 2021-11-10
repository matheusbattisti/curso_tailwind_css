const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
