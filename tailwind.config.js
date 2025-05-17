/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          surface: '#1E1E1E',
          'surface-muted': '#2A2A2A',
          brand: { 500: '#22C55E', 600: '#16A34A' },
          text: { DEFAULT: '#E5E5E5', muted: '#A1A1A1' },
        },
        boxShadow: { card: '0 4px 12px rgba(0,0,0,0.6)' },
      },
    },
    plugins: [],
  };
  