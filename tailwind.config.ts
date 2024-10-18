import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        purple: {
          DEFAULT: 'hsl(var(--purple))',
          foreground: 'hsl(var(--purple-foreground))',
          background: '#D7D7FF',
          via: '#E8F5FF',
          main: '#7879F1',
          200: '#F3F5FF',
          300: '#FBFBFE',
        },
        red: {
          DEFAULT: 'hsl(var(--red))',
          foreground: 'hsl(var(--red-foreground))',
          warning: '#FF6969',
        },
        green: {
          DEFAULT: 'hsl(var(--green))',
          foreground: 'hsl(var(--green-foreground))',
          success: '#67B472',
          main: '#00FF00',
        },
        black: {
          DEFAULT: 'hsl(var(--black))',
          foreground: 'hsl(var(--black-foreground))',
          background: '#3B3D53',
          main: '#000000',
          title: '#474747',
          description: '#3B3D53',
        },
        gray: {
          DEFAULT: 'hsl(var(--gray))',
          foreground: 'hsl(var(--gray-foreground))',
          black: '#1B1D1F',
          main: '#F6F6F6',
          border: '#AEAFBB',
          100: '#EAEAEA',
          200: '#C7C7C7',
          300: '#8A8A8A',
          400: '#565656',
          500: '#6D737A',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        scaleUp: 'scaleUp 0.5s ease-in-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },

      height: {
        header: '120px',
        calcScreen: 'calc(100dvh - 120px)',
      },

      minHeight: {
        screen: 'calc(100dvh - 120px)', // min-height로 추가
      },

      transitionProperty: {
        backgroundColor: 'background-color',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
