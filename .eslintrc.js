module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
    'prettier',
    'prettier/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
