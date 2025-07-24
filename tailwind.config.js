/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#B2FAE3",
        'secondary': "#0B424E",
        'txtcol': '#888888',
        'grey': '#6D6D6D',
        'gray': '#D2D2D2'
      },
      screens: {
        'xxl': '1920px', // 4K displays and larger
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
],

}