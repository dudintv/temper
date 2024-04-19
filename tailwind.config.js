/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#f6f6f6",
        primary: "#6357b1",
        secondary: "#28ff90",
      },
    },
  },
  plugins: [],
};
