/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#335eea",
        secondary: "#00f6ff",
        success: "#42ba96",
        navLink: "#506690",
        textSecondary: "rgb(51,94,234)",
        smoke: "rgba(241,244,248,1)",
        dark: "rgba(27,42,78,1)",
        lightdark: "rgba(113,118,149,1)", //for paragraph
      },
      fontFamily: {
        HKGroteskPro: ["HKGroteskPro", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1040px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

// /* Font Download Link - https://www.fontsquirrel.com/fonts/hk-grotesk */
