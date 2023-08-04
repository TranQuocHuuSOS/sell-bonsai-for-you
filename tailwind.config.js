/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
     
        "h2":["40px",{lineHeight:1.5}],
        "h3":["32px",{lineHeight:1.5}],
        "h4":["22px",{lineHeight:1.5}],
        "h4-2":["24px",{lineHeight:"40px"}],
        "p-l":["18px",{lineHeight:"28px"}]
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
