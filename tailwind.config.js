/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 600px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1680px",
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      fontFamily: {
        TatsamBook: "TatsamBook",
        sans: ["Inter", "TatsamBook", ...fontFamily.sans],
      },
      colors: {
        brand: {
          primary: "#17b4c4",
          secondary: "#072847",
        },
        dark: {
          primary: "#080808",
          primary2: "#292929",
          primary3: "#ababab",
          secondary: "#424242",
          semiLight: "#949494",
          light: "#ddd",
        },
        social: {
          facebook: "#2563eb",
          instragram: "#e1306c",
          linkedin: "#00a0dc",
          gitLab1: "#FC6D26",
          gitLab2: "#E24329",
        },
      },
      fontSize: {
        md: [
          "15px",
          {
            lineHeight: "1.5rem",
          },
        ],
        18: [
          "18px",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
