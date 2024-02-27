const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        '32C': '#32C0CF',
        '3A4': '#3A4064',
        '231': '#231F20',
        '5F': '#5F5F5F',
        '8B': '#8B8B8B',
        'CC': '#CCCCCC',
        '231': '#231F20',
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
        gradient: {
          'to-top': 'linear-gradient(to top, rgba(58, 64, 100, 1), rgba(58, 64, 100, 0))',
        },
      },
      borderRadius: {
      	xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
      width: {
        'lgs': '560px'
      },
      screens: {
        'xs': '480px',
      },
      fontSize: {
        '7.5xl': '5rem'
      },
      boxShadow: {
        sha: '0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 8px rgba(255, 255, 255, 0.25)',
        sha_l: '2px 4px 4px rgba(0, 0, 0, 0.25), 2px 4px 8px rgba(255, 255, 255, 0.0)',
        ins: 'inset 5px 5px 10px #22838d',
      },
      fontFamily: {
        dm_sans: ['Dm_sans', 'sans-serif'],
        clash_display: ['Clash_display', 'sans-serif'],
      }
    },
  },
  plugins: [animate],
}