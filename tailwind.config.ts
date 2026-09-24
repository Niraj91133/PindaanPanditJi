import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F7F2",
        surface: {
          light: "#FFFDF9",
          DEFAULT: "#F9F7F2",
          dark: "#26231F",
          cardDark: "#1E1C18",
        },
        primary: {
          text: "#25231F",
          light: "#38342E",
        },
        secondary: {
          text: "#706B63",
          light: "#8F8980",
        },
        accent: {
          gold: "#9A6A32",
          goldLight: "#B38246",
          goldDark: "#7E5424",
          goldSoft: "#F3EADF",
          goldSubtle: "#F9F4EE",
        },
        border: {
          subtle: "#E7E1D7",
          dark: "#3B3730",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
        wide: "1200px",
      },
      borderRadius: {
        card: "16px",
        btn: "8px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(37, 35, 31, 0.04), 0 1px 2px rgba(37, 35, 31, 0.02)",
        card: "0 4px 20px -2px rgba(37, 35, 31, 0.05)",
        darkCard: "0 8px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
