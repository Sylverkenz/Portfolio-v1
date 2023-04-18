/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,}"],
  theme: {
    screens: {
      xsm: "360px",
      sm: "480px",
      md: "767px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      xsm: "1.6rem",
      sm: "1.8rem",
      lg: "1.9rem",
      xl: "2.1rem",
      xxl: "2.4rem",
      "2xl": "4.8rem",
      "3xl": "5.6rem",
      "4xl": "6.8rem",
      "5xl": "9.6rem",
    },

    extend: {
      colors: {
        primaryDark: "#10101A",
        primaryLight: "#E9E9E9",
        navTextDark: "#DBDBDB",
        navTextLight: "#10101A",
        bodyTextDark: "#FFFFFF",
        bodyTextLight: "#323232",
      },
      fontFamily: {
        CDisplay: ["Clash Display", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
