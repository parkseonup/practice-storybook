/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        point: "#2583EF",
        border: "#fff",
        primary: "#fff",
        secondary: "#aaa",
        disabled: "#666",
      },
    },
  },
  plugins: [],
};
