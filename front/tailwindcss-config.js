module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'photo_couv': "url('/public/images/photo_couv.jpg')",
       })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
