/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1a1a1a", // Deep Charcoal
          secondary: "#f9f8f4", // Warm Off-White
          accent: "#556b2f", // Muted Olive
          "accent-light": "#7c9155",
          cta: "#25D366", // WhatsApp Green
          neutral: {
             100: "#f5f5f5",
             200: "#e5e5e5",
             300: "#d4d4d4",
             400: "#a3a3a3",
             500: "#737373",
             600: "#525252",
             700: "#404040",
             800: "#262626",
             900: "#171717",
          }
        },
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['"Inter"', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
      },
    },
    plugins: [],
  }
