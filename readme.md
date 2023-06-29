# No-Sweat™ Eslint and Prettier Setup

Modified from [**wesbos/eslint-config-wesbos**](https://github.com/wesbos/eslint-config-wesbos)
These are my settings for ESLint and Prettier

You might like them - or you might not. Don't worry you can always change them.

## What it does

- Lints JavaScript and TypeScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of html script tags
- Lints + Fixes React via eslint-config-airbnb
- You can see all the [rules here](https://github.com/frontendfixer/eslint-config-wesbos-extended/blob/master/.eslintrc.js) - these generally abide by the code written in my courses. You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## Project Install

It's recommended you install this once per every project. ESLint used to have global configs, but no longer.

1. If you don't already have a `package.json` file, create one with `npm init -y`.

2. Then we need to install this config

- with NPM

```bash
npm install -D @frontendfixer/eslint-config-wesbos
```

- with PNPM

```bash
pnpm add -D @frontendfixer/eslint-config-wesbos
```

1. We need to put our eslint settings in a file in the root of your project. You can create a new `.eslintrc` or `.eslintrc.js` file that lives where package.json does:

**in package.json**, add this anywhere top level. Like right under your "scripts" object.

```json
"eslintConfig": {
  "extends": ["@frontendfixer/wesbos"]
}
```

Or put this in a `.eslintrc` file

```json
{
  "extends": ["@frontendfixer/wesbos"]
}
```

For TypeScript projects, use `@frontendfixer/wesbos/typescript`.

```js
module.exports = {
  extends: ['@frontendfixer/wesbos'],
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      extends: ['@frontendfixer/wesbos/typescript'],
    },
  ],
};
```

TypeScript users will also need a `tsconfig.json` file in their project. An empty object (`{}`) will do!

1. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```js
{
  "extends": [
    "@frontendfixer/wesbos"
  ],
  "rules": {
    "no-console": "error",
  }
}
// You can also use {0, 1, 2} for {"off", "warn", "error"}
```

### Prettier Rules

By default these rules are enable.

```js
{
  quoteProps: "as-needed",
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  jsxSingleQuote: false,
}
```

If you want custom [prettier options](https://prettier.io/docs/en/options.html), it's recommended to create a `.prettierrc` file in your root directory like so:

You can also put this in your EsLint config as a rule like so:

```json
{
  "extends": ["@frontendfixer/wesbos"],
  "rules": {
    ... any eslint rules here
    "prettier/prettier": [
      "error",
      {
        // your rules
      },
    ],
  }
}
```

Note if you are switching to double quotes, you'll also need to add this eslint rule, or they will fight to the death!

```js
quotes: ['error', 'double'];
```

## With VSCode

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript][javascriptreact][typescript][typescriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

## With Create React App

1. Run `npx install-peerdeps --dev @frontendfixer/eslint-config-wesbos`
2. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": "@frontendfixer/wesbos"`

## With Gatsby

1. Run `npx install-peerdeps --dev @frontendfixer/eslint-config-wesbos`
1. follow the `Local / Per Project Install` steps above

## With Typescript

Same instructions as above, just make sure you extend `@frontendfixer/wesbos/typescript` instead of just `@frontendfixer/wesbos`.

## Issues with ESLint not formatting code

If you experience issues with ESLint not formatting the code or you receive a `Parsing error: Cannot find module '@babel/preset-react` error message then you need to check that you opened the folder where you installed and configured ESLint directly in VS Code. The correct folder to open will be the one where you installed the `@frontendfixer/eslint-config-wesbos` npm package and where you created the `.eslintrc` file.

Opening a parent folder or child folder in your code editor will cause ESLint to fail in finding the ESLint npm packages and the formatting won't work.

```sh
your-username
  |
  projects
    |
    beginner-javascript # <- Open this folder directly in your code editor
      .eslintrc
      package.json
      node_modules/
      exercises/
      playground/
```
