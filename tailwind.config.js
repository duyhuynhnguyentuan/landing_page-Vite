/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ['Font_by_suahbi', 'sans'],
        secondary: ['Vividlyviethoa', 'sans'],
        tertiary: ['Livvic', 'sans'],
      },
      animation:{
        'spin-cham': 'spin 6s 6s linear infinite',
      }
    },
  },
  plugins: [],
}