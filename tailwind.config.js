/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#282c34",
          card: "#3a3f47",
          surface: "#1e2228",
          border: "#4a4f57",
          light: "#4a5568",
        },
        accent: {
          DEFAULT: "#61dafb",
          dim: "rgba(97, 218, 251, 0.15)",
          muted: "rgba(97, 218, 251, 0.08)",
        },
        success: "#4ade80",
        warning: "#fbbf24",
        danger: "#f87171",
        purple: "#a78bfa",
        orange: "#fb923c",
        pink: "#f472b6",
      },
    },
  },
  plugins: [],
};
