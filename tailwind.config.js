/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        night: '#050816',
        ink: '#0b1026',
        plasma: '#9b5cff',
        cyan: '#00e5ff',
        coral: '#ff4f88',
        solar: '#ffd166',
        mint: '#2df7a7'
      },
      boxShadow: {
        neon: '0 0 28px rgba(0,229,255,.25), 0 0 70px rgba(155,92,255,.18)',
        coral: '0 0 30px rgba(255,79,136,.28)'
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at 15% 15%, rgba(0,229,255,.22), transparent 24%), radial-gradient(circle at 82% 12%, rgba(255,79,136,.2), transparent 22%), radial-gradient(circle at 55% 75%, rgba(255,209,102,.13), transparent 26%)'
      }
    }
  },
  plugins: []
};
