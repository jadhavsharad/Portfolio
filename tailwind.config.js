/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        BebasNeue: ['Bebas Neue', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Syne: ['Syne'],
        Syncopate:['Syncopate'],
        Allura: ['Allura'],
        MontrealBook: ['PP Neue Montreal Book'],
        MontrealBold: ['PP Neue Montreal Bold'],
        MontrealBold: ['PP Neue Montreal Bold'],
        MontrealSI: ['PP Neue Montreal SemiBold italic'],
        MontrealItalic: ['PP Neue Montreal Italic'],
        MontrealThin: ['PP Neue Montreal Thin'],
        MontrealMedium: ['PP Neue Montreal Medium'],
        WorkSans: ['Work Sans'],
        Raleway:['Raleway'],
        Figtree:['Figtree']
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}

