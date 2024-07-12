import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "600px", // Custom extra small breakpoint
        sm: "900px", // Default small breakpoint
        md: "1150px", // Default medium breakpoint
        // "smlg":"1280px",
        lg: "1458px", // Default large breakpoint
        xl: "1458px", // Default extra large breakpoint
        "2xl": "1536px", // Default 2xl breakpoint
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        playWrite: ["Playwrite USA Traditional", "hand-writing"],
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%": { transform: "translateY(10px) " },
          "100%": { transform: "translateY(0px) " },
        },
        scroll: {
          "0%": { transform: "translateX(-100px) " },
          "100%": { transform: "translateX(0%) " },
        },
      },
      animation: {
        spin: "spin 15s linear infinite",
        bounce: "bounce 1.4s  infinite",
        scroll: "scroll 5s linear infinite",
      },
      invert: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
export default config;
