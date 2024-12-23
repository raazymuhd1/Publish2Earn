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
        extra: "#161616",
        // extra2: "#edff20",
        extra2: "#CEE01B",
        line: "#000000"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
