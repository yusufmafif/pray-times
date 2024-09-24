// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}