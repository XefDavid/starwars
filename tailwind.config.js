/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './node_modules/primevue/**/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        starJedi: ['StarJedi', 'sans-serif'], 
        starjhol: ['Starjhol', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

