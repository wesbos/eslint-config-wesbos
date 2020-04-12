#!/usr/bin/env node
// .eslintrc.js

/**
 * The ESLint + Prettier config from Kipras <kipras@kipras.org> (https://kipras.org)
 *
 * Supports TypeScript!
 * (
 *   https://javascriptplayground.com/typescript-eslint/
 * & https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 * )
 *
 */

module.exports = {
	extends: [
		"airbnb",
		"eslint:recommended",
		"plugin:flowtype/recommended",
		"plugin:import/typescript" /** https://github.com/benmosher/eslint-plugin-import#typescript */,
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		// "plugin:@typescript-eslint/recommended-requiring-type-checking", /** broken atm */
		"plugin:monorepo/recommended",
		"prettier",
		"prettier/react",
		"prettier/@typescript-eslint",
	],
	parser: "@typescript-eslint/parser" /** leggo typescript! */,
	parserOptions: {
		ecmaVersion: 2020,
		// Can I remove these now?
		ecmaFeatures: {
			impliedStrict: true,
			classes: true,
		},
	},
	env: {
		browser: true,
		node: true,
		jquery: true,
		jest: true,
	},
	rules: {
		/** typescript-specific */
		"@typescript-eslint/no-inferrable-types": 0,
		"@typescript-eslint/no-use-before-define": 0 /** allow `const foo = require("bar");` in typescript */,

		/** end typescript-specific */

		"no-debugger": 0,
		"no-alert": 0,
		"no-await-in-loop": 0,
		"no-return-assign": ["error", "except-parens"],
		"no-restricted-syntax": [2, "ForInStatement", "LabeledStatement", "WithStatement"],
		"no-unused-vars": [
			1,
			{
				ignoreSiblings: true,
				argsIgnorePattern: "res|next|^err",
			},
		],
		"prefer-const": [
			"error",
			{
				destructuring: "all",
			},
		],
		"arrow-body-style": [2, "as-needed"],
		"no-unused-expressions": [
			2,
			{
				allowTaggedTemplates: true,
			},
		],
		"no-param-reassign": [
			2,
			{
				props: false,
			},
		],
		"no-console": 0,
		"import/prefer-default-export": 0,
		import: 0,
		"func-names": 0,
		"space-before-function-paren": 0,
		"comma-dangle": 0,
		"max-len": 0,
		"import/extensions": 0,
		"no-underscore-dangle": 0,
		"consistent-return": 0,
		"react/display-name": 1,
		"react/no-array-index-key": 0,
		"react/react-in-jsx-scope": 0,
		"react/prefer-stateless-function": 0,
		"react/forbid-prop-types": 0,
		"react/no-unescaped-entities": 0,
		"jsx-a11y/accessible-emoji": 0,
		"react/require-default-props": 0,
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		radix: 0,
		"no-shadow": [
			2,
			{
				hoist: "all",
				allow: ["resolve", "reject", "done", "next", "err", "error"],
			},
		],
		quotes: [
			2,
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		semi: [2, "always"],
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				singleQuote: false,
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				arrowParens: "always",
				breakBeforeElse: true,
				disableLanguages: [],
				flattenTernaries: true,
				proseWrap: "never",
				htmlWhitespaceSensitivity: "ignore",
			},
		],
		/** https://eslint.org/docs/rules/spaced-comment */
		"spaced-comment": [
			"error",
			"always",
			{
				line: { markers: ["*package", "!", "/", ",", "="] },
				block: {
					balanced: true,
					markers: ["*package", "!", ",", ":", "::", "flow-include"],
					exceptions: ["*"],
				},
			},
		],
		"jsx-a11y/href-no-hash": "off",
		"jsx-a11y/anchor-is-valid": [
			"warn",
			{
				aspects: ["invalidHref"],
			},
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
	plugins: [
		"html",
		"prettier",
		"react-hooks",
		"flowtype" /** CRA has this & I wanted it to work by default via global install */,
		// "@typescript-eslint"
		"@typescript-eslint/eslint-plugin",
	],
};
