# No-Sweat™ Eslint and Prettier Setup
These are my settings for ESLint and Prettier

You might like them - or you might not. Don't worry you can always change them.

## What it does
* Lints JavaScript based on the latest standards
* Fixes issues and formatting errors with Prettier
* Lints + Fixes inside of html script tags
* Lints + Fixes React via eslint-config-airbnb
* You can see all the [rules here](https://github.com/wesbos/eslint-config-wesbos/blob/master/.eslintrc.js) - these generally abide by the code written in my courses. You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## How to use

You can use eslint globally and/or locally per project.

I usually have something installed globally so whatever I'm doing is covered. Then, for projects that need their own config I install it locally and have that overwrite the global config as well as make it shareable to github.


### Globally

First install everything needed:

```
npx install-peerdeps --global eslint-config-wesbos
```
(**note:** npx is not a spelling mistake of **npm**. npm comes when node and npm are installed and make script-running easier 😃)

Then you need to make a global `.eslintrc` file"

ESLint will look for one in your home directory

* `~/.eslintrc` for mac
* `C:\Users\username\.eslintrc` for windows

In your `.eslintrc` file, it should look like this:

```json
{
  "extends": [
    "wesbos"
  ]
}
```

To use from the CLI, you can now run `eslint .` or configure your editor as we show later in these docs.

### Locally / Per Project Basis

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-wesbos
```

3. You can see in your package.json there are now a big list of devDependencies.

4. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## With VS Code

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:
  ```js
    // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
  // Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
  "prettier.disableLanguages": [
    "js"
  ],
  ```

## 🤬🤬🤬🤬 ITS NOT WORKING

start fresh. Sometimes global modules can goof you up. This will remove them all.

```
npm remove --global eslint-config-wesbos babel-eslint eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier
```

To do the above for local, omit the `--global` flag.

Then if you are using a local install, remove your `package-lock.json` file and delete the `node_modules/` directory.

Then follow the above instructions again.
