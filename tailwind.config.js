/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6c00",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
