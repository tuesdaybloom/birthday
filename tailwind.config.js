/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        md: '10px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'], // Add hover variant for display
    },
  },
  plugins: [],
}

