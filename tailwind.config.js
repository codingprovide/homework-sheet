/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        "10": 'repeat(10 , minmax(0, 1fr))',
      },
      keyframes: {
        pulseA:{ 
          "50%": {backgroundColor:"#bfdbfe"},
        },
        pulseB:{
          "50%": {backgroundColor:"#bbf7d0"}
        }
      },
      animation:{
        pulseA:"pulseA 2s cubic-bezier(0.4, 0, 0.6, 1)  infinite",
        pulseB:"pulseB 2s cubic-bezier(0.4, 0, 0.6, 1)  infinite"
      },
    },
  },
  plugins: [],
}

