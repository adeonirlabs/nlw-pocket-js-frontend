import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      width: {
        '100': '25rem',
      },
    },
  },
  plugins: [],
} satisfies Config
