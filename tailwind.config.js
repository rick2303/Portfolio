/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: ["Fraunces", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 500ms ease-out both",
      },
      colors: {
        dark: {
          // Negro puro (zinc-950)
          primary: "#09090B",
          // Accent monocromo: blanco
          secondary: "#FAFAFA",
          // Surface de tarjeta (zinc-900)
          tertiary: "#18181B",
          // Texto principal (zinc-50)
          font_primary: "#FAFAFA",
          // Texto secundario (zinc-400)
          font: "#A1A1AA",
        },
        light: {
          // Blanco puro
          background: "#FFFFFF",
          // Texto principal casi negro (zinc-950)
          primary: "#09090B",
          // Accent monocromo: negro (zinc-900)
          secondary: "#18181B",
          // Bordes neutros (zinc-200) — NUNCA usar como color de texto
          tertiary: "#E4E4E7",
          // Surface secundaria (zinc-50)
          section: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
