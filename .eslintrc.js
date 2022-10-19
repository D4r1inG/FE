module.exports = {
  root: true,

  env: {
    node: true,
    es6: true,
    browser: true
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
