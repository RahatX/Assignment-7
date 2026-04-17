/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F4F2FF",
          card: "#FFFFFF",
          text: "#1F2937",
          muted: "#6B7280",
          border: "#E5E7EB",
          red: "#F04438",
          yellow: "#F59E0B",
          green: "#12B76A",
        },
      },
    },
  },
  plugins: [],
};
