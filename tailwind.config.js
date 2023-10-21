/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "E31B6D",
        nav: "1A1D26",
        "black-dark": "0E0E0E",
        "black-gray": "343434",
      },
      fontFamily: {
        generalBold: ["GeneralSansBold", "sans-serif"],
        generalSemibold: ["GeneralSansSemibold", "sans-serif"],
        generalRegular: ["GeneralSansRegular", "sans-serif"],
        generalLight: ["GeneralSansLight", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
