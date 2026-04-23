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
        primary: "#4C84FF", 
        secondary: "#FF9F43",
        background: "#F7F9FC",
        muted: "#8A99AF",
      },
    },
  },
  plugins: [],
};
export default config;
