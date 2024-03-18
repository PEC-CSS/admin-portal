/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      keyframes: {
        customBounce: {
          '0%': {
            transform: 'translateY(-8px)',
          }, 
          '50%': {
            transform: 'translateY(0);',
          },
          '100%': {
            transform: 'translateY(-8px)',
          },
        },
        customBounceOnHover: {
          '0%': {
            transform: 'translateY(-8px) scale(1.15)',
          }, 
          '50%': {
            transform: 'translateY(0) scale(1.15)',
          },
          '100%': {
            transform: 'translateY(-8px) scale(1.15)',
          },
        }
      },
      animation: {
        customBounce: 'customBounce 2s ease-in-out infinite',
        customBounceOnHover: 'customBounceOnHover 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
