import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../frontend/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../frontend/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      "main-bg": "#1D2127",
      white: "#D1D7E0",
      primary: "#6F00FF",
      secondary: "#36FFB5",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
