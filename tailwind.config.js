/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#1F1F1F',
        primary: '#D47EAE',
        secondary: '#168BC2',
        text: '#FFFFFF',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      borderRadius: {
        layout: '24px',
      },
      width: {
        layout: '393px',
      },
      height: {
        layout: '852px',
      },
    },
  },
  plugins: [],
}
