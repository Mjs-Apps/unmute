import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E6FBFF",
          100: "#CCF6FF",
          200: "#99EDFF",
          300: "#66E4FF",
          400: "#33DAFF",
          500: "#00C8FF",
          600: "#00A0CC",
          700: "#007899",
          800: "#004466",
          900: "#0F1423"
        }
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,.2)"
      },
      backdropBlur: { xs: "2px" }
    }
  },
  plugins: []
};
export default config;
