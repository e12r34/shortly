/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shorten-desktop': "url('/assets/images/bg-shorten-desktop.svg')",
      }
    },
  },
  plugins: [],
}

