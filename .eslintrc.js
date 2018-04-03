module.exports = {
  env: {
    browser: true
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
