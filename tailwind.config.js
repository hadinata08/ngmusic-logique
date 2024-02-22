/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      "roboto-light": ["Roboto Light", "Helvetica", "Arial", "sans-serif"],
      "roboto-medium": ["Roboto Medium", "Helvetica", "Arial", "sans-serif"],
      "roboto-bold": ["Roboto Bold", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
