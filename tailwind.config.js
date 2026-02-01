/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        jet: "#0b0b0c",
        charcoal: "#141414",
        ivory: "#f6f1e9",
        "warm-ivory": "#eae2d5",
        bronze: "#b98b4b",
        gold: "#d6b46a"
      }
    }
  },
  plugins: []
};
