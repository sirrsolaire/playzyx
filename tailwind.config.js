/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },

      backgroundImage: {
        "post-card":
          "linear-gradient(45deg, rgba(47,48,54,1) 0%, rgba(32,32,32,1) 100%)",
        "mask-image":
          "linear-gradient(#000 calc(100% - 60px),transparent calc(100% - 4px))",
      },

      colors: {
        "body-color": "#151515",
        "game-info": "#202020",
        "second-color": "hsla(0,0%,100%,.16)",
        "info-color": "hsla(0,0%,100%,.4)",
        "border-color": " hsla(0,0%,100%,.07)",
        "button-color": "hsla(0,0%,100%,.1)",
      },

      screens: {
        smallTb: "550px",
        tablet: "980px",
        desktopFirst: "1055px",
        desktopSecond: "1440px",
        desktopThird: "1800px",
      },
    },
  },

  plugins: [require("rippleui")],
};
