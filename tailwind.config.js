/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        '32C': '#32C0CF',
        '3A4': '#3A4064',
        '231': '#231F20',
        '5F': '#5F5F5F',
        '8B': '#8B8B8B',
        'CC': '#CCCCCC',
        '231': '#231F20',
        gradient: {
          'to-top': 'linear-gradient(to top, rgba(58, 64, 100, 1), rgba(58, 64, 100, 0))',
        },
      },
      width: {
        'lgs': '560px'
      },
      screens: {
        'xs': '480px',
      },
      fontSize: {
        '7.5xl': '5rem'
      },
      boxShadow: {
        sha: '0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 8px rgba(255, 255, 255, 0.25)',
        sha_l: '2px 4px 4px rgba(0, 0, 0, 0.25), 2px 4px 8px rgba(255, 255, 255, 0.0)',
        ins: 'inset 5px 5px 10px #22838d',
      },
      fontFamily: {
        dm_sans: ['Dm_sans', 'sans-serif'],
        clash_display: ['Clash_display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

