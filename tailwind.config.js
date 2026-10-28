/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          obsidian: '#151413',
          dark: '#1C1A18',
          darkCard: '#24211E',
          border: 'rgba(201, 169, 130, 0.18)',
          champagne: {
            DEFAULT: '#C9A982',
            light: '#E2CEB9',
            dark: '#9E7E5A',
            glow: 'rgba(201, 169, 130, 0.22)'
          },
          bronze: {
            DEFAULT: '#765A46',
            light: '#A5856D',
          },
          travertine: '#F8F5F1',
          paper: '#EEE7DE',
          greige: '#EAE3DA'
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      aspectRatio: {
        'portrait': '9 / 16',
      }
    },
  },
  plugins: [],
}
