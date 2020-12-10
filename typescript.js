module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
    'prettier/@typescript-eslint', // Use `eslint-config-prettier` to override conflicting rules from `@typescript-eslint/eslint-plugin`
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  // then add some extra good stuff for Typescript
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // Then we add our own custom typescript rules
  rules: {
    // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
