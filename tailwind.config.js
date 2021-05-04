module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Abhaya Libre']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#21a4b6',
      'secondary': '#ffcd6d',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
