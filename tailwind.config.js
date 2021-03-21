module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
