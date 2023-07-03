module.exports = {
  root: true,

  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],

  'parser': 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
    'lines-between-class-members': [
      'error',
      'always',
      { 'exceptAfterSingleLine': true }
    ],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
