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
  			main: "#b5d944",
        textMain: "#000000",
			  secondary: "#dad5cf",
        extra: "#c6c6c6",
        // extra2: "#edff20",
        extra2: "#fffef3",
        line: "#000000"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
