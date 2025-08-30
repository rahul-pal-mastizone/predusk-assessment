/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg))",
        foreground: "rgb(var(--fg))",
        muted: "rgb(var(--muted))",
        card: "rgb(var(--card))",
        border: "rgb(var(--border))",
      }
    },
  },
  plugins: [],
}