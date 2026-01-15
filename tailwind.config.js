/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // Luxury Dark Blue
          primary: '#2563eb', // Trust Blue
          accent: '#f59e0b', // Gold/Action (Buttons)
          green: '#22c55e', // WhatsApp Green
        }
      }
    },
  },
  plugins: [],
}