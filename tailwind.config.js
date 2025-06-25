/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'navy-dark': '#0F172A',
        'white': '#F8FAFC',
        'indigo': '#6366F1',
        'gold': '#F59E0B',
        'purple-gradient-start': '#8B5CF6',
        'purple-gradient-end': '#A855F7',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

