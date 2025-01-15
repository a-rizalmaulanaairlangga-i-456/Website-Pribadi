/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg', // Tambahkan utilitas rotateY
      },
      animation: {
        blink: 'blink 0.7s steps(2, start) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { visibility: 'visible' },
          '50%': { visibility: 'hidden' },
        },
      },
    },
  },  plugins: [],
}

