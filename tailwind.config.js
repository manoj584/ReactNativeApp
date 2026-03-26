/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'react-blue': '#61dafb',
        'dark-bg': '#282c34',
        'card-bg': '#3a3f47',
      },
    },
  },
  plugins: [],
}

