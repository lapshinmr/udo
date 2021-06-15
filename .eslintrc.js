module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': ['warn', { code: 120 }],
    'vue/max-len': ['warn', {
      code: 120,
      template: 120,
    }],
  },
  settings: {
    'import/resolver': {
      vue: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
