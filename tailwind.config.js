/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      colors: {
        "body-color": "#151515",
        "game-info": "#202020",
        "second-color": "hsla(0,0%,100%,.16)",
      },
    },
  },
  plugins: [],
};
