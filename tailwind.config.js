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
            transform: 'translateY(-15%)',
          }, 
          '50%': {
            transform: 'translateY(0);',
          },
          '100%': {
            transform: 'translateY(-15%)',
          },
        }
      }
    },
  },
  plugins: [],
}
