// This file tells Vite how to process your CSS
// @tailwindcss/postcss is the new separate package for Tailwind v4+
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Tailwind's PostCSS plugin (new v4 package)
    autoprefixer: {},           // Automatically adds browser prefixes to CSS
  },
}