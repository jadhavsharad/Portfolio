const { nextui } = require("@nextui-org/react");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        Syncopate: ['Syncopate'],
        Allura: ['Allura'],
        MontrealBook: ['PP Neue Montreal Book'],
        MontrealBold: ['PP Neue Montreal Bold'],
        MontrealBold: ['PP Neue Montreal Bold'],
        MontrealSI: ['PP Neue Montreal SemiBold italic'],
        MontrealItalic: ['PP Neue Montreal Italic'],
        MontrealThin: ['PP Neue Montreal Thin'],
        MontrealMedium: ['PP Neue Montreal Medium'],
        WorkSans: ['Work Sans'],
        Raleway: ['Raleway'],
        Figtree: ['Figtree'],
        RedHatDisplay: ['Red Hat Display'],
        Coda: ['Coda'],
        Oxanium: ['Oxanium'],
        Audiowide: ['Audiowide'],
        Orbitron: ['Orbitron'],
        DECTM: ['DEC Terminal Modern']
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
  ],
}
