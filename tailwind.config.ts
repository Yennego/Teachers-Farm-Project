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
        primary: '#2f8151',  // Your primary green color
        secondary: '#ffffff',  // White
        accent: '#6fbb84',  // A lighter shade of green for accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace with a modern font
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
