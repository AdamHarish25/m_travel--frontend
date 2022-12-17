/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: [ "'Poppins'", "sans-serif" ],
    },
    screens: {
      xs: "0px",

      sm: "640px",

      md: "848px",

      lg: "1025px",

      xl: "1280px",

      lxl: "1580px",

      "2xl": "1806px",
    },
    extend: {
      gridTemplateColumns: {
        SL: "auto 1fr",
        "2auto": "repeat(2, minmax(auto, auto))",
      },
      gridTemplateRows: {
        SL: "auto 1fr",
      },
    },
  },
  plugins: [],
}
