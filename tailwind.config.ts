import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        calmBlue: "#4A90E2",
        successGreen: "#50E3C2",
        lightGray: "#F5F5F5",
        darkGray: "#4A4A4A",
        mediumGray: "#9B9B9B",
        energyOrange: "#F5A623",
      },
    },
  },
  plugins: [],
};
export default config;
