/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#070812',
        night: '#0E1424',
        frost: '#EAF2FF',
        cyanGlow: '#54E7FF',
        mintGlow: '#6EF3B5',
        coralGlow: '#FF7A90',
        goldGlow: '#FFD166',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 34px rgba(84, 231, 255, 0.24)',
        card: '0 24px 80px rgba(0, 0, 0, 0.34)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at top left, rgba(84,231,255,.22), transparent 32rem), radial-gradient(circle at 78% 22%, rgba(255,122,144,.18), transparent 28rem), radial-gradient(circle at 50% 100%, rgba(110,243,181,.14), transparent 26rem)',
      },
    },
  },
  plugins: [],
};
