/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cookie_regular: ["Cookie", "cursive"],
      },
      backgroundImage: {
        homeslider: "url('/banner-1.jpg')",
        insta_1: "url('/insta-1.jpg')",
        insta_2: "url('/insta-2.jpg')",
        insta_3: "url('/insta-3.jpg')",
        insta_4: "url('/insta-4.jpg')",
        insta_5: "url('/insta-5.jpg')",
      },
    },
    plugins: [],
  },
};
