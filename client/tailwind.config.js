/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#212121",
        "light-dark": "#424242"
      },
      keyframes: {
        slideRight: {
          "from": { width: "0%"},
          "to": { width: "70%" }
        }
      },
      animation: {
        slideRight: "slideRight 0.3s linear"
      }
    },
  },
  plugins: [],
}
