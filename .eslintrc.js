const { off } = require("process");

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 0,
    'no-console': 'off',
    'simple-import-sort/imports': error,
  },
}
