/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        encabezado: '#0a0c0d',    // Anteriormente '#160d18',
        principal: '#348e91',        // Anteriormente '#23145b',
        texto: '#0a0c0d',        //#1c5052           Anteriormente '#09456c',
        botones: '#213635',      // Anteriormente '#026f6e',
        fondo: '#ffffff',    // Anteriormente '#1ca39e',
      },
    },
  },
  plugins: [],
}
