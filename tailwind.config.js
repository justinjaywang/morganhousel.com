/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./_layouts/**/*.html",
    "./_includes/**/*.{html,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Martina Plantijn"', "serif"],
      },
      spacing: {
        1: "var(--v)",
      },
    },
  },
};
