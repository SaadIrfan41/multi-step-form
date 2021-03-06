module.exports = {
  // mode: 'jit',
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',

      3: '3px',
      4: '4px',

      6: '6px',

      8: '8px',
    },
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { borderWidth: ['hover', 'focus'] },
  },
  plugins: [],
}
