/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cereal: ["Poppins", "sans-serif"], // Use Poppins as a substitute for Airbnb Cereal
      },
    },
  },
  plugins: [],
}