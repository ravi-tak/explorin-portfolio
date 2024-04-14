/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1440px' },
      xl: { max: '1200px' },
      lg: { max: '1024px' },
      sm: { max: '769px' },
      xs: { max: '640px' },
      xxs: { max: '445px' },
    },
    extend: {
      colors: {
        'blue-1': '#253644',
        'blue-2': '#172937',
        white: '#FFF',
        gray: '#9A9090',
        'orange-1': '#F37021',
        'orange-2': '#FF6928',
      },
    },
  },
  plugins: [],
}
