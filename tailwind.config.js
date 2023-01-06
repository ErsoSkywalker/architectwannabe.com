/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blog: "#393E46",
        teal: "#00ADB5",
        bone: "#EEEEEE",
        semiblack: "#222831",
        tealevent: "#00888e",
      },
    },
  },
  plugins: [],
};
