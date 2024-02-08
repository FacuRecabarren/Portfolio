/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
    extend: {
      screens: {
        'xl': {'min': '1700px'},
      },
      boxShadow: {
        'sombra-imagen': '0px 0px 17px 0px rgba(132,55,241,0.75)',
        'sombra-bg-sm': '0px 2px 2px 2px rgba(81,87,208,0.6)',
        'sombra-bg': '4px 4px 4px 0px rgba(81,87,208,0.6)',
        'sombra-bg-footer': '4px 4px 4px 4px rgba(0, 0, 0, 0.711)',
        'sombra-btn-proyects': '1px 1px 2px rgba(0,0,0,0.65)',
        'custom': '0 2px 5px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        palette: {
          50: "#FCFBFE",
          100: "#FCFBFE",
          200: "#FCFBFE",
          300: "#E8DBFB",
          400: "#CAA9F9",
          500: "#9345FF",
          600: "#8437F1",
          700: "#7525E4",
          800: "#5F21B5",
          900: "#47217D",
          950: "#2F1C4A"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
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
        "rotate-opacity": {
          "0%": {
            transform: "rotate(0)",
            opacity: "0.4",
          },
          "50%": {
            opacity: "0.7",
          },
          to: {
            transform: "rotate(360deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rotate-center-opacity": "rotate-opacity 0.9s cubic-bezier(0.680, -0.550, 0.265, 1.550)   both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}