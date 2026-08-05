import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        blush: {
          50: "#FFF9FB",
          100: "#FDEFF4",
          200: "#FBDDE9",
          300: "#F7C2D8",
          400: "#F09CBD",
          500: "#E572A0",
          600: "#D14D80",
          700: "#AE3564",
          800: "#8A2B52",
          900: "#5C1D38",
        },
        mauve: {
          50: "#FAF7FC",
          100: "#F1E9F8",
          200: "#E1CDF1",
          300: "#C9A6E4",
          400: "#AD7BD3",
          500: "#9257C1",
          600: "#7A3FA8",
          700: "#623086",
          800: "#4A2465",
          900: "#2E1640",
        },
        cream: "#FFFDFC",
        ink: "#2B1C33",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(146, 87, 193, 0.25)",
        glow: "0 0 60px -10px rgba(224, 130, 175, 0.45)",
        card: "0 20px 60px -15px rgba(74, 36, 101, 0.18)",
      },
      backgroundImage: {
        "aurora": "radial-gradient(60% 60% at 20% 20%, rgba(240,156,189,0.35) 0%, rgba(240,156,189,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(173,123,211,0.35) 0%, rgba(173,123,211,0) 60%), radial-gradient(55% 55% at 50% 90%, rgba(233,196,220,0.35) 0%, rgba(233,196,220,0) 60%)",
        "petal-gradient": "linear-gradient(135deg, #F09CBD 0%, #AD7BD3 100%)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.12)", opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "float-slow": "floatSlow 12s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
