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
        'fade':
          'linear-gradient(90deg, #141414 0%, rgba(20, 20, 20, 0.3) 10%, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 0.3) 90%, #141414 100%);'

      },
      boxShadow: {
        'white-img': '0 0 30px 10px rgba(190, 190, 190, 0.1)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-mobile': 'infinite-scroll-mobile 20s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 25s linear infinite',
        'header-loop': 'header-loop 10s linear infinite',
        'header-loop-mobile': 'header-loop-mobile 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'infinite-scroll-mobile': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1920px)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'header-loop': {
          '0%': { top: '-1px' },
          '20%': { top: '-1px' },
          '25%': { top: '-141px' },
          '45%': { top: '-141px' },
          '50%': { top: '-281px' },
          '70%': { top: '-281px' },
          '75%': { top: '-421px' },
          '95%': { top: '-421px' },
          '100%': { top: '-561px' },
        },
        'header-loop-mobile': {
          '0%': { top: '-1px' },
          '20%': { top: '-1px' },
          '25%': { top: '-61px' },
          '45%': { top: '-61px' },
          '50%': { top: '-121px' },
          '70%': { top: '-121px' },
          '75%': { top: '-181px' },
          '95%': { top: '-181px' },
          '100%': { top: '-241px' },
        }
      }  
    },
  },
  plugins: [],
}
export default config
