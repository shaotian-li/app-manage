module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential', // vue
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'vue', // vue
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-extend-native': ['error', { exceptions: ['Number'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0, //禁用 console
    'no-unused-vars': 1, //禁止出现未使用过的变量
  },
};
