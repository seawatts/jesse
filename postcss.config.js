export default {
  plugins: {
    '@tailwindcss/postcss': {},
    ...(process.env.JEKYLL_ENV === 'production' ? { cssnano: { preset: 'default' } } : {})
  }
};