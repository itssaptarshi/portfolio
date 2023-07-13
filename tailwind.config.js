/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "254px",
        200: "314px",
      },
      width: {
        100: "190px",
        200: "250px",
      },
    },
  },
  plugins: [],
};
