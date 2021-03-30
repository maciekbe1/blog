module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          600: "#383838",
          700: "#333333",
          800: "#202020",
          900: "#181818",
        },
      },
      screens: {
        xs: { max: "639px" },
      },
      fontFamily: {
        nunito: "Nunito",
      },
    },
  },
  variants: {
    extend: {
      outline: ["hover", "active"],
      margin: ["first", "last", "odd"],
      cursor: ["hover", "focus"],
      transitionProperty: ["hover", "focus"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
