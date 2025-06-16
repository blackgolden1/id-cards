import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#1b5d91' ,
      },
      fontFamily:{
        josefin: ['"Josefin Sans"', 'sans-serif'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
        noto: ['"Noto Sans Gujarati"', 'sans-serif'],
      }
    },
  },
  plugins: [],
 
} satisfies Config;
