## eslint-config-wesbos

These are my settings for ESLint and Prettier

You might like them - or you might not :)

## What it does
* Lints JavaScript based on the latest standards
*

## How to use

You can use eslint globally and/or locally per project.

I usually have something installed globally so whatever I'm doing is covered. Then, for projects that need their own config I install it locally and have that overwrite the global config as well as make it shareable to github.


### globally

npm i --global eslint-config-wesbos
npx install-peerdeps --global eslint-config-wesbos

### Locally

locally will install the deps as dev dependencies:

npx install-peerdeps --dev eslint-config-wesbos

## 🤬🤬🤬🤬 ITS NOT WORKING

start fresh. Sometimes global modules can goof you up. This will remove them all.

`npm remove -g eslint-config-wesbos babel-eslint eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-html prettier eslint-config-airbnb`

Then if you are using a local install, remove your `package-lock.json` file and delete the `node_modules/` directory.

Then follow the above instructions again.
