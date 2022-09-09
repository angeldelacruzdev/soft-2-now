/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: "Roboto",
      inter: "Inter",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
