/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cookie_regular: ["Cookie", "cursive"],
      },
      backgroundImage: {
        homeslider: "url('/banner-1.jpg')",
      },
    },
    plugins: [],
  },
};
