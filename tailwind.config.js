/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B3DFF',
        background: '#0F0F17',
        card: '#1B1B27'
      }
    }
  },
  plugins: []
};
