/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1D3557", // Figma sidebar/text primary
          secondary: "#E2E8F0",
          accent: "#10B981",
          danger: "#EF4444",
          text: "#1D3557",
          muted: "#8597A8", // Figma text secondary
        },
        tahwul: {
          sidebar: "#1D3557", // Figma exact sidebar color
          blue: "#2563eb",
          bg: "#F5F8FA", // Figma exact background
        },
        figma: {
          bg: "#F5F8FA",
          sidebar: "#1D3557",
          border: "#E0E8ED",
          textPrimary: "#1D3557",
          textSecondary: "#8597A8",
          textTertiary: "#7B9FC3",
          accentRed: "#DB1F26",
          searchBg: "#F9FAFA",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
