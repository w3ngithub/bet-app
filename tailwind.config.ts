import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "semi-lg": "950px",
      mobile: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      height: {
        contentWidth: "calc(100vh - 56px)",
      },
      colors: {
        border: "hsl(var(--border))",
        textYellow: "rgb(var(--text-yellow))",
        textWhite: {
          200: "rgb(var(--text-white-200))",
          300: "rgb(var(--text-white-300))",
          400: "rgb(var(--text-white-400))",
          500: "rgb(var(--text-white-500))",
        },
        backgroudGray: {
          200: "rgb(var( --background-gray-200))",
        },
        greenBg: {
          200: "rgb(var(--background-green-200))",
          300: "rgb(var(--background-green-300))",
          400: "rgb(var(--background-green-400))",
          500: "rgb(var(--background-green-500))",
          600: "rgb(var(--background-green-600))",
          700: "rgb(var(--background-green-700))",
          800: "rgb(var(--background-green-800))",
        },
        "gradient-primary": {
          start: "rgb(var(--background-green-600))",
          end: "rgb(var(--background-green-800))",
        },

        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "rgb(var(--primary))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
