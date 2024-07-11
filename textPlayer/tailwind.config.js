/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '100%': { right: '150%' },
        }
      },
      animation: {
        progress: 'progress 2s linear forwards',
      }
    },
  },
  plugins: [],
}

