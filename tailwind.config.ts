import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen:{
        sm:'488px',
        md:'768px',
        lg:'976px',
        xl:'1440px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },colors:{
        initClr:'#187b36',
        bgColor:'#030710',
        dangerRed:'rgb(216, 0, 0)',
        appWallet:'#0066b2'
        
      },
    },
  },
  plugins: [],
};
export default config;
