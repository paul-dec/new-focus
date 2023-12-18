import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5B11C2',
        'secondary': '#141414',
        'light-secondary': '#191919',
        'tertiary': '#FFFFFF',
        'light-tertiary': '#383838',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'white-img': '0 0 30px 10px rgba(190, 190, 190, 0.1)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'header-loop': 'header-loop 10s linear infinite',
        'header-loop-mobile': 'header-loop-mobile 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'header-loop': {
          '0%': { top: '-1px' },
          '20%': { top: '-1px' },
          '25%': { top: '-121px' },
          '45%': { top: '-121px' },
          '50%': { top: '-241px' },
          '70%': { top: '-241px' },
          '75%': { top: '-361px' },
          '95%': { top: '-361px' },
          '100%': { top: '-481px' },
        },
        'header-loop-mobile': {
          '0%': { top: '-1px' },
          '20%': { top: '-1px' },
          '25%': { top: '-81px' },
          '45%': { top: '-81px' },
          '50%': { top: '-161px' },
          '70%': { top: '-161px' },
          '75%': { top: '-241px' },
          '95%': { top: '-241px' },
          '100%': { top: '-321px' },
        }
      }  
    },
  },
  plugins: [],
}
export default config
