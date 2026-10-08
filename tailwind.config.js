/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1D4ED8", dark: "#1E40AF" },
        accent: { DEFAULT: "#0EA5E9", teal: "#06B6D4" },
        ice: { DEFAULT: "#F8FAFC", blue: "#F0F9FF" },
        ink: "#0F172A",
        body: "#475569",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(29,78,216,0.25)",
      },
    },
  },
  plugins: [],
};
