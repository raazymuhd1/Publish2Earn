import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			main: "#d6ff39",
        textMain: "#f2f2f2",
			  secondary: "#dad5cf",
        extra: "#141414"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
