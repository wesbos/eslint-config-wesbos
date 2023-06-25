// This is a patch so that eslint will load the plugins as dependencies. Otherwise we have to install EVERYTHING in th root project
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jquery: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  plugins: ['html', 'prettier', 'react-hooks', 'import', 'simple-import-sort'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  ignorePatterns: ['node_modules/', '.next/'],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-use-before-define': 'off',
    'no-await-in-loop': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_',
        varsIgnorePattern: '^_',
        // Broken in TypeSCript.Want this turned on
        // destructuredArrayIgnorePattern: '^_',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    import: 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/extensions': 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/button-has-type': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    radix: 'off',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        jsxSingleQuote: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/comma-dangle': ['off'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
