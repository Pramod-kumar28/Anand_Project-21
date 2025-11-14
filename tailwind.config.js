/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1e3a5f',
        'light-navy': '#2d4f7c',
        'navy-text': '#1e3a5f',
        'text-Orange': '#FFA500',
        'pink': '#FFC0CB',
        'purple': '#800080',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    // Add all dynamic classes that might be used
    'bg-blue-100', 'text-blue-800',
    'bg-amber-100', 'text-amber-800', 
    'bg-green-100', 'text-green-800',
    'bg-blue-500', 'text-blue-600',
    'bg-green-500', 'text-green-600',
    'bg-amber-500', 'text-amber-600',
  ]
}