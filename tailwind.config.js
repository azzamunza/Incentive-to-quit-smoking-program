/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#00698f',
        'eucalyptus-green': '#2e7d32',
      },
      fontFamily: {
        sans: ['Inter', 'Public Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
