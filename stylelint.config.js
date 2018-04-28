module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [/\.vue$/]
      }
    ]
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['content', 'include', 'mixin']
      }
    ],
    'no-empty-source': null
  }
}
