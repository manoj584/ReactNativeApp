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
        // React Native website inspired colors
        dark: {
          DEFAULT: "#20232a",    // Main dark background
          card: "#282c34",       // Card background
          surface: "#1a1d23",    // Surface background
          border: "#373b47",     // Border color
          light: "#4a5568",      // Light text
        },
        accent: {
          DEFAULT: "#61dafb",    // React blue
          dim: "rgba(97, 218, 251, 0.15)",
          muted: "rgba(97, 218, 251, 0.08)",
          hover: "#4fa8c8",      // Hover state
        },
        text: {
          primary: "#ffffff",    // Primary text
          secondary: "#b4b4b4",  // Secondary text
          muted: "#6c757d",      // Muted text
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
