# No-Sweat™ ESLint, Prettier and TypeScript setup

These are my settings for ESLint and Prettier

You might like them - or you might not. Don't worry you can always change them.

## What it does

* Lints JavaScript based on the latest standards
* Fixes issues and formatting errors with Prettier
* Lints + Fixes inside of html script tags
* Lints + Fixes React via eslint-config-airbnb
* You can see all the [rules here](./.eslintrc.js). You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## Installing

You can use eslint globally and/or locally per project.

It's usually best to install this locally once per project, that way you can have project specific settings as well as sync those settings with others working on your project via git.

I also install globally so that any project or rogue JS file I write will have linting and formatting applied without having to go through the setup. You might disagree and that is okay, just don't do it then 😃.

## Staying up-to-date

You can [watch the repo (releases only) on github](https://github.com/sarpik/eslint-config-sarpik/watchers) to get notified once I release a new version! 🚀

## Local / Per project install

```sh
yarn init -y                                            # Create 'package.json' if you haven't already
npx install-peerdeps --dev eslint-config-sarpik --yarn  # Install everything needed by the config
                                                        # You can see in your package.json there's now a big list of devDependencies
touch .eslintrc.js                                      # Create the config file @ the project's root
```

Your `.eslintrc.js` file should look like this:

```js
module.exports = {
  "extends": [
    "sarpik"
  ]
}
```

> Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig": { ... }`. This makes one less file in your project.

You can add these two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

Now you can manually lint your code by running `yarn lint` (`npm run lint`) and fix all fixable issues with `yarn lint:fix` (`npm run lint:fix`). You probably want your editor to do this though.

## Global Install

1. First install everything needed:

```
npx install-peerdeps --global eslint-config-sarpik --yarn
```

(**note:** npx is not a spelling mistake of **npm**. `npx` comes with when `node` and `npm` are installed and makes script running easier 😃 (and it works automatically with yarn, too!))

2. Then you need to make a global `.eslintrc.js` / `.eslintrc` file:

ESLint will look for one in your home directory

* `~/.eslintrc[.js]` for UNIX
* `C:\Users\<username>\.eslintrc[.js]` for Windows

Your `.eslintrc.js` file should look like this:

```js
module.exports = {
  "extends": [
    "sarpik"
  ]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc[.js]` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`. Note that prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well.

```js
module.exports = {
  "extends": [
    "sarpik"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": false,
        "printWidth": 120,
        "tabWidth": 4,
      }
    ]
  }
}
```

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```json
{
  "editor.formatOnSave": true,

  /** disable tslint - no need! */
  "tslint.enable": false,

  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    // "source.fixAll.eslint": true /** included by previous setting */
  },

  // "eslint.run": "onSave",
  "eslint.run": "onType",
  /** work as a formatter, too! */
  "eslint.format.enable": true,

  /**
   * ~~turn formatting off for JS, JSX, TS & TSX - we do this via eslint~~
   * ESLint IS the formatter now!
   * (Prettier is still in the picture, as we have configured it via eslint)
  */
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },

  /**
   * Optional but IMPORTANT:
   * If you have the prettier extension enabled for other languages like CSS and HTML,
   * turn it off for JS since we are doing it through eslint already
  */
  "prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact"],

  /** ~~make sure both js and ts are validated~~ no longer needed as of vscode-eslint 2.0 */
//   "eslint.validate": [
//     "javascript",
//     "javascriptreact",
//     "typescript",
//     "typescriptreact",
//   ]
}
```

See also [the README of vscode-eslint](https://github.com/microsoft/vscode-eslint/blob/master/README.md).

## With Create React App

1. Run `npx install-peerdeps eslint-config-sarpik --dev --yarn`
1. Crack open your `package.json` and
   1.  replace `"extends": "react-app"` with `"extends": "sarpik"`
   1.  replace `"eslint": "5.x"` with `"eslint": "6.x"` like so: `yarn add eslint@6.x`, or replace yourself & run `yarn install`
		1. verify that eslint's version is `6.x.y`: run `node node_modules/.bin/eslint --version`
   1. if you're using typescript, append `--ext js,jsx,ts,tsx` every time you call `eslint` (required for eslint `6.x`, see https://github.com/sarpik/eslint-config-sarpik/issues/4)

Your `package.json` should have this:

```json
{
	"scripts": {
		"lint": "    eslint . --ext js,jsx,ts,tsx",
		"lint:fix": "eslint . --ext js,jsx,ts,tsx --fix"
	},
	"eslintConfig": {
		"extends": "sarpik"
	},
	"devDependencies": {
		"eslint": "6.x"
	}
}
```

Example repo with commits as setting up steps: https://github.com/sarpik/cra-eslint-ts

## 🤬🤬🤬🤬 IT'S NOT WORKING

Start fresh. Sometimes global modules can goof you up. This will remove them all:

```
yarn global remove eslint-config-sarpik @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-plugin-react-hooks
```

To do the above for local, omit the `--global` flag.

Then if you are using a local install, remove your `package-lock.json` / `yarn.lock` file and delete the `node_modules/` directory.

```sh
rm package-lock.json
rm yarn.lock
rm -rf node_modules
```

Then follow the above instructions again.

## License

[MIT](./LICENSE) © 2019 [Kipras Melnikovas](https://github.com/sarpik)
