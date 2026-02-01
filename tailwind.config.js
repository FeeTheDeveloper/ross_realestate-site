/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      colors: {
        brand: {
          navy: "#0B2D5B",
          blue: "#134E9B",
          red: "#C1121F",
          gold: "#C6A15B",
          goldDeep: "#B78B3D",
          white: "#FFFFFF",
          softWhite: "#F7F7F7"
        },
        primary: "#0B2D5B",
        secondary: "#134E9B",
        danger: "#C1121F",
        accent: "#C6A15B",
        surface: "#F7F7F7",
        textDark: "#0B2D5B",
        textLight: "#FFFFFF"
      }
    }
  },
  plugins: []
};
