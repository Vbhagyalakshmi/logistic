import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A2B",
          light: "#0F2B44",
        },
        ivory: "#F7F4EE",
        amber: {
          DEFAULT: "#F4A62A",
          dark: "#D98E14",
        },
        steel: "#53728A",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(7, 26, 43, 0.25)",
        card: "0 10px 40px -12px rgba(7, 26, 43, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
