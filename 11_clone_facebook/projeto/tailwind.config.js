module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '290px': '290px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px'
      },
      fontSize: {
        'subtitle': '1.7rem'
      },
      colors: {
        'main-gray': '#F0F2F5',
        'main-blue': '#1877F2',
        'main-blue-hover': '#166FE5',
        'main-green': '#42B72A',
        'main-green-hover': '#36A420'
      }
    }
  },
  variants: {},
  plugins: []
}
