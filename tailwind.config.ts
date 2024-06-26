import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import files from './files'

export default {
  content: [...files],
  theme: {
    container: {
      screens: {
        lg: '1200px',
      },
      center: true,
      padding: '1rem',
    },
    extend: {
      boxShadow: {
        card: '0 2px 6px -4px rgba(0, 11, 67, 0.10)',
        button: '0 12px 14px rgba(0, 14, 87, 0.12)',
      },
      colors: {
        body: '#f6f6f6',
        brand: {
          1: '#1254ff',
        },
        dark: {
          1: '#010021',
          2: '#293356',
          5: '#b0b8d0',
        },
        divider: '#f0f3f8',
      },
      fontFamily: {
        sans: ['"TT Hoves Pro Trial"', ...fontFamily.sans],
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
    },
  },
  plugins: [],
} satisfies Config
