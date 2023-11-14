import { fontFamily } from "tailwindcss/defaultTheme";
import { customColors } from "./app/styles/colors";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        pretendard: ["SF-PRO", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".header-text": {
          fontFamily: "SF-PRO, sans-serif",
          fontWeight: "400",
          fontSize: "1.7rem",
          lineHeight: "3rem",
          letterSpacing: "-0.762px",
        },
        ".footer-text": {
          fontFamily: "SF-PRO, sans-serif",
          fontWeight: "500",
          fontSize: "0.82rem",
          letterSpacing: "-0.26px",
        },
        ".font-main": {
          fontFamily: "SF-PRO, sans-serif",
          fontWeight: "700",
          fontSize: "2.6rem",
          lineHeight: "2rem",
          letterSpacing: "-0.073px",
        },
        ".font-sub": {
          fontFamily: "SF-PRO, sans-serif",
          fontWeight: "700",
          fontSize: "2rem",
          lineHeight: "1.5rem",
          letterSpacing: "-0.057px",
        },
        ".searchBar-text": {
          fontFamily: "SF-PRO, sans-serif",
          fontWeight: "400",
          fontSize: "1.3rem",
          lineHeight: "2rem",
          letterSpacing: "-0.041px",
        },
        ".playButton-text": {
          fontFamily: "SF-PRO, sans-serif",
          fontWeight: "600",
          fontSize: "2.04rem",
          lineHeight: "3rem",
          letterSpacing: "-0.061px",
        },
        ".movie-detail-sub": {
          fontFamily: "SF-PRO, sans-serif",
          fontWeight: "400",
          fontSize: "1.2rem",
          lineHeight: "1.7rem",
          letterSpacing: "-0.031px",
        },
      });
    }),
  ],
};
