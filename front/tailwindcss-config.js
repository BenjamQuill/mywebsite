module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'photo_profil': "url('/public/images/photo_profil.jpeg')",
       })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
