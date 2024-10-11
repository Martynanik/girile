/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#567257",
          // initiall
          // "secondary": "#ACAB9E",
          "secondary": "#BBDC9C",
          "accent": "#446C4C",
          "neutral": "#896A58",
          // initial
          // "base-100": "#D9D8D5",
          "base-100": "#446C4C",
        },
      },
    ],
  },
}

