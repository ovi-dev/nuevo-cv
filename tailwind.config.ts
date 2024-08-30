
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'raleway',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    // pantallas y tamanos
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    // colores principales
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      
      backgroundImage: {
        site: "url('/img/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('/img/services.png')",
      
      },
    },
    
  },
  plugins: [],
};
export default config;



// "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",