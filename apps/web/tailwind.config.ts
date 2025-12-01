import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00F5FF',
        'neon-magenta': '#FF006E',
        'electric-green': '#39FF14',
        'deep-void': '#0A0E27',
        'grid-glow': 'rgba(0, 245, 255, 0.15)',
        'void-light': '#1a1f3a',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(0, 245, 255, 0.5)',
        'neon-intense': '0 0 40px rgba(0, 245, 255, 0.8)',
        'magenta-glow': '0 0 20px rgba(255, 0, 110, 0.5)',
        'green-glow': '0 0 20px rgba(57, 255, 20, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
