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
        primary: {
          light: '#CA1F80',
          dark: '#CA1F80',
        },
        secondary: {
          light: '#94739D',
          dark: '#94739D',
        },
        terciary: {
          light: '#F1E8F4',
          dark: '#F1E8F4',
          lighthover: '#1d4ed8',
          darkhover: '#1d4ed8',
        },
        base: {
          light: '#F5F5F5',
          dark: '#111827',
        },
        white: {
          light: '#F5F5F5',
          dark: '#F5F5F5',
        },
        black: {
          light: '#000000',
          dark: '#000000',
        },
        mainborder: {
          light: '#e5e7eb',
          dark: '#4b5563',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
