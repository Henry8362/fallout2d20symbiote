module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    globals: {
      TS: 'readonly',
      onStateChangeEvent: 'readonly',
    },
    rules: {
      'no-undef': 'off', // Optionally turn off no-undef rule
      // Other rules...
    },
  };