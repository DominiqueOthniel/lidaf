/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7FC',
        foreground: '#1A1A2E',
        primary: {
          DEFAULT: '#1B5E20',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E8F5E9',
          foreground: '#1B5E20',
        },
        accent: {
          DEFAULT: '#6B4FA0',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F3F0F8',
          foreground: '#6B7280',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A2E',
        },
        border: '#E2DFF0',
        input: '#E2DFF0',
        ring: '#1B5E20',
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
