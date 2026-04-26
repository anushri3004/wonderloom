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
        bg: '#FFFBF7',
        bgSoft: '#FDF1F2',
        pink: {
          DEFAULT: '#FD72A4',
          deep: '#D85589',
          soft: '#FDB9D2',
        },
        blue: {
          DEFAULT: '#6DBFE2',
          deep: '#4A9FC4',
          soft: '#A5D8EE',
        },
        yellow: {
          DEFAULT: '#FDF940',
          soft: '#FEF3A8',
        },
        purple: {
          DEFAULT: '#C459C5',
          soft: '#E4BEE5',
        },
        softPink: '#F4D7D9',
        ink: '#2A2320',
      },
      fontFamily: {
        display: ['Englebert', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
