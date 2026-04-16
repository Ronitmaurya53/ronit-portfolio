/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0f",
        darkCard: "#0f172a",
        neonPurple: "#7b2ff7",
        neonBlue: "#00d4ff",
        borderColor: "#1f2937",
      },

      boxShadow: {
        neon: "0 0 20px rgba(123,47,247,0.3)",
      },

      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};