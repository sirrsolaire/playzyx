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
        exceptional: "linear-gradient(180deg,#b4ec51,#429321)",
        recommended: "linear-gradient(0deg,#4354b9,#649bff)",
        meh: "linear-gradient(180deg,#fad961,#f76b1c)",
        skip: "linear-gradient(180deg,#ff5764,#f11a2a)",
        "default-profile-avatar": "linear-gradient(0deg,#3023ae,#c86dd7)",
      },

      colors: {
        "body-color": "#151515",
        "game-info": "#202020",
        "second-color": "hsla(0,0%,100%,.16)",
        "info-color": "hsla(0,0%,100%,.4)",
        "border-color": "hsla(0,0%,100%,.07)",
        "button-color": "hsla(0,0%,100%,.1)",
        "mobile-comment": "hsla(0,0%,100%,.5)",
        "show-more": "rgba(44,44,44,.5)",
        "tag-color": "rgba(16, 117, 124, 0.1)",
        "input-color": "rgba(0,0,0,.5)",
        "input-border": "hsla(0,0%,100%,.2)",
        "favourite-bg": "rgba(0,0,0,.7)",
      },
      boxShadow: {
        "modal-button": "0 0 20px 0 hsla(0,0%,100%,.2)",
      },

      screens: {
        smallTb: "550px",
        tablet: "980px",
        desktopFirst: "1055px",
        desktopFirstHalf: "1280px",
        desktopSecond: "1440px",
        desktopThird: "1800px",
      },
    },
  },

  plugins: [require("rippleui")],
};
