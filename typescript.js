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
  rules: {},
  parserOptions: {
    project: './tsconfig.json',
  },
};
