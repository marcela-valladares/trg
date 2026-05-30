import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        deep: "#1E3A5F",
        ink: "#092235",
        gold: "#D4AF37",
        cream: "#F2EDE6",
        porcelain: "#FBF8F3"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 26px 90px rgba(10, 36, 56, 0.18)",
        gold: "0 16px 50px rgba(212, 175, 55, 0.22)"
      },
      backgroundImage: {
        "navy-radial":
          "radial-gradient(circle at 20% 10%, rgba(212,175,55,0.17), transparent 30%), linear-gradient(135deg, #061927 0%, #0A273C 48%, #1E3A5F 100%)"
      }
    }
  },
  plugins: []
};

export default config;
