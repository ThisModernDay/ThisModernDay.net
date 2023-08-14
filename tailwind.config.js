const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/wallpaper.png')",
      }
    },
  },
  variants: {
    extend: {
      borderRadius: ['first','last'],
      opacity: ['last'],
      animation: ['hover']
    },
  },
  presets: [require('full-palette')],
  plugins: [],
}
