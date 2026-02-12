/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#ede8d0',
          blue: '#0f4c9a',
          'blue-light': '#1a5fb4',
          navy: '#0a1628',
          'navy-light': '#132240',
        },
        separator: '#0f4c9a',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Space Mono"', 'monospace'],
      },
      screens: {
        'xs': '600px',
        'xl': '1190px',
        '2xl': '1595px',
        '3xl': '2179px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(15, 76, 154, 0.08)',
        'card-hover': '0 8px 24px rgba(15, 76, 154, 0.18)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}
