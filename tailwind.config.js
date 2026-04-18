/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss:    '#010a12',
        deep:     '#020f1e',
        midnight: '#041628',
        ocean:    '#062340',
        current:  '#0a3a5c',
        surface:  '#0e5a7a',
        glow:     '#00d4ff',
        biolume:  '#00ffcc',
        foam:     '#a8e6f0',
        'sea-light': '#e8f6fa',
        coral:    '#ff6b6b',
        gold:     '#ffd166',
      },
      fontFamily: {
        syne:       ['Syne', 'sans-serif'],
        mono:       ['DM Mono', 'monospace'],
        serif:      ['Instrument Serif', 'serif'],
      },
      animation: {
        'blink':      'blink 2s ease infinite',
        'scan':       'scan 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease infinite',
        'fade-up':    'fadeUp 0.8s ease forwards',
        'spin-slow':  'spin 3s linear infinite',
      },
      keyframes: {
        blink:     { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.2 } },
        scan:      { '0%': { top: '0%' }, '100%': { top: '100%' } },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 0 3px rgba(0,255,204,0.2), 0 0 20px #00ffcc' },
          '50%':     { boxShadow: '0 0 0 6px rgba(0,255,204,0.1), 0 0 35px #00ffcc' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #010a12 0%, #020f1e 50%, #041628 100%)',
      },
    },
  },
  plugins: [],
}
