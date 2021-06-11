module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "sample"
  ],
  rules: {
    "sample/no-eslint-import": "error",
    "sample/no-scary-words-in-comments": "warn"
  },
};
