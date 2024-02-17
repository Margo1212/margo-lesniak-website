import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/lib/**/*.{js,ts,jsx,tsx,mdx}",

    "./app/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      "main-bg": "#1D2127",
      "secondary-bg": "#1D2126",
      text: "#AAAEB6",
      white: "#D1D7E0",
      primary: "#8C33FF",
      secondary: "#36FFB5",
      alert: "#E30029",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
