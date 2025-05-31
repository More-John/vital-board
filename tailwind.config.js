/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // NGO brand color
        health: '#10b981', // Health-related green
        warning: '#f59e0b', // Warning orange
        critical: '#ef4444', // Critical red
      },
    },
  },
  plugins: [],
}

