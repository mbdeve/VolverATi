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
        // Coral / terracota — tomado del logo real "Volver a Ti"
        blush: {
          50: "#FDF6F2",
          100: "#FBEAE1",
          200: "#F5D2C0",
          300: "#EDB093",
          400: "#E08D68",
          500: "#C97B5D",
          600: "#B5502E",
          700: "#8F3D22",
          800: "#6E2F1B",
          900: "#4A2012",
        },
        // Azul marino — acento del logo ("SANAR · CRECER · FLORECER")
        mauve: {
          50: "#F4F6F8",
          100: "#E4E9EE",
          200: "#C3CEDA",
          300: "#9FB0C2",
          400: "#6C84A0",
          500: "#3E5872",
          600: "#2C3E56",
          700: "#22344A",
          800: "#182636",
          900: "#0F1822",
        },
        // Dorado / mostaza — usado en el banner de pre-venta
        gold: {
          400: "#D2B48C",
          500: "#B8935A",
          600: "#9C7A45",
        },
        cream: "#FBF3EE",
        ink: "#2E2018",
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
        "aurora": "radial-gradient(60% 60% at 20% 20%, rgba(224,141,104,0.30) 0%, rgba(224,141,104,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(44,62,86,0.16) 0%, rgba(44,62,86,0) 60%), radial-gradient(55% 55% at 50% 90%, rgba(201,123,93,0.25) 0%, rgba(201,123,93,0) 60%)",
        "petal-gradient": "linear-gradient(135deg, #E08D68 0%, #B5502E 100%)",
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
