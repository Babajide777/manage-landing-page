/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vietnam: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      colors: {
        otherOrange: "#F3603C",
        otherBlue: "#242D52",
        otherBlack: "#1D1E25",
        otherLight: "#FFF0EC",
      },
    },
  },
  plugins: [],
};
