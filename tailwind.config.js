/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryLightBackground' : '#DEE4E7',
        'primaryDarkBackground' : '#37474F', 
        'primaryLight': '#1E3A8A',
        'primaryDark' : '#F3F4F6'
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

