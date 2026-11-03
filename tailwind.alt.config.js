/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./alt/**/*.html",
    "./_layouts/**/*.html",
    "./_includes/**/*.{html,md}",
  ],
  theme: {
    // Replaces the default 0.25rem scale. A number is that many --v.
    // A `g` suffix is that many --gutter, matching the reference styles.
    spacing: {
      0: "0",
      1: "var(--v)",
      2: "calc(var(--v) * 2)",
      3: "calc(var(--v) * 3)",
      4: "calc(var(--v) * 4)",
      g: "var(--gutter)",
      "2g": "calc(var(--gutter) * 2)",
    },
    extend: {
      fontFamily: {
        serif: ['"Martina Plantijn"', "serif"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "3/2": "3 / 2",
      },
    },
  },
};
