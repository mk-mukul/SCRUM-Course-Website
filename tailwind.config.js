module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        purple: "#9921E8",
        blue: "#5F72BE",
        skyBlue: "#2D81F7",
        red: "#FE5702",
        green: "#08BD80",
        maroon: "#EB5757",
        orange: "#FFAD3B",
        dark: {
          text: "#8C8C8C",
          background: "#27282B",
          primary: "#537CE5",
          secondary: "#343538",
          stroke: "#363636",
        }
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      }
    },
  },
  plugins: [],
}
