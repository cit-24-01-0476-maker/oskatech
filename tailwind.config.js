/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        primary: "#22D3EE",
        accent: "#A855F7",
        text: "#E5E7EB",
        muted: "#94A3B8",
      },
      boxShadow: {
        glow: "0 0 25px rgba(34,211,238,0.35)",
        purpleGlow: "0 0 25px rgba(168,85,247,0.35)",
      },
      backgroundImage: {
        cyber:
          "radial-gradient(circle at top left, rgba(34,211,238,0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 45%)",
      },
    },
  },
  plugins: [],
}
