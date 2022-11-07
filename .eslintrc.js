module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    // 'no-unused-vars': 'off',
    // // 'disable-quotes': 'true',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
  },
};
