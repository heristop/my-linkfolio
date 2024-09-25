import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/linkfolio/dist/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#937FA3",
        secondary: "#A56B8C",
        background: {
          start: "#E8EFF7",
          end: "#EDE8F7",
        },
      },
      backgroundImage: ({ theme }) => ({
        "gradient-background": `linear-gradient(
          to bottom, 
          ${theme("colors.background.start")}, 
          ${theme("colors.background.end")}
        )`,
      }),
    },
  },
  plugins: [],
};

export default config;
