/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./bright-scope/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        elgharib: ['"Elgharib FS Kofi Ahram"', 'Arial', 'sans-serif'],
        arabic: ['"Elgharib FS Kofi Ahram"', 'Cairo', 'sans-serif'],
        ibmplex: ['"IBM Plex Sans Arabic"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
