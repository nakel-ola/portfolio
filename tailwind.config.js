/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#19191b",
        "light-dark": "#424242",
      },
      keyframes: {
        slideRight: {
          from: { width: "0%" },
          to: { width: "70%" },
        },
        spinSlow: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: 1,
            borderRadius: 0,
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: 1,
            borderRadius: "50%",
          },
        },
      },
      animation: {
        slideRight: "slideRight 0.3s linear",
        "spin-slow": "spinSlow 25s linear infinite",
      },
    },
  },
  plugins: [],
};
