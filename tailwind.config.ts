import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgGray: '#1e1e1e',
        bgDarkGray: '#121212',
        borderGray: '#2d2d2d',
        accent: '#e03e33',
      },
      keyframes: {
        zoom: {
          '0%': { scale: '1' },
          '100%': { scale: '1.5' },
        },
        scroll: {
          '0%': { translate: '0% 0%', opacity: '1' },
          '70%,100%': { translate: '0% 200%', opacity: '0' },
        },
      },
      animation: {
        zoom: 'zoom 25s linear forwards',
        scroll: 'scroll 1.75s ease-in forwards infinite',
      },
      fontFamily: {
        bitter: 'var(--bitter)',
        bizudMincho: 'var(--bizudMincho)',
      },
    },
  },
  plugins: [],
};
export default config;
