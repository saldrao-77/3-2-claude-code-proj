/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cool-gray': {
          600: '#4B5563',
          900: '#111827',
        },
        'border': {
          DEFAULT: '#e5e4e1',
          light: '#ebebeb',
          menu: '#d1d5db',
        },
        'brand': '#4391fe',
        'row-hover': '#faf9f7',
        'header-bg': '#f1f1f1',
        'success-bg': '#daf6ca',
        'pending-bg': '#f1f2f5',
      },
    },
  },
  plugins: [],
}
