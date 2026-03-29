// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "float-slow": "float 20s ease-in-out infinite",
        "float-fast": "float 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
    },
  },
  plugins: [],
})