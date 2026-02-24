/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          // Un azul noche mucho más profundo y profesional
          primary: "#0B121A",
          // El color de acento (para iconos, puntos, bordes destacados)
          secondary: "#3B82F6",
          // Un azul grisáceo para tarjetas o elementos secundarios
          tertiary: "#16222E",
          // Texto principal (casi blanco)
          font_primary: "#F1F5F9",
          // Texto secundario (más suave)
          font: "#94A3B8",
        },
        light: {
          // Un crema/grisáceo muy limpio (warm white)
          background: "#FDFCFB",
          // Color de texto principal
          primary: "#1E293B",
          // Color de acento en modo claro
          secondary: "#2563EB",
          // Gris cálido para bordes y detalles
          tertiary: "#E2E8F0",
          // Un tono sutil para fondos de secciones
          section: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
