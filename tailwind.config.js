/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleDark: "#740095",
        purpleBright: "#A620CD",
        mint: "#00BFB9",
        tealDark: "#005E87",
        softMint: "#E6FFFB",
      },
      boxShadow: {
        glow: "0 10px 30px rgba(166,32,205,0.35)",
      },
    },
  },
  plugins: [],
};
