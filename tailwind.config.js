/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      colors: {
        lightPink: "#fffafa",
        lightBlue: "#e4f2f5",
        lightBlueSup: "#7b979c",
        darkGrayishPink: "#903a44",
        darkGrayishBlue: "#3a5961",
      },
    },
  },
  plugins: [],
};
