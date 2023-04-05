/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        screenS: "640px",
        screenM: "1128px",
        screenL: "1312px",
        screenXL: "1631px",
        screenXXL: "1966px",
        screenXXXL: "2304px",
      },
      colors: {
        "red-yt": "#FF0000",
        "blue-yt": "#3ea6ff",
        "blue-light-yt": "#def1ff",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
