/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7c33',
        secondary: '#E91E63',
        text: '#212121',
        header: '#FFC107',
        darkbrown: '#5C4033',
        background: '#fffefc'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        futura: ['futura', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
