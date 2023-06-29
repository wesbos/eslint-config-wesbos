# @frontendfixer/eslint-config-wesbos

## 1.2.1

### Patch Changes

- [`16033ac`](https://github.com/frontendfixer/-frontendfixer-eslint-config-wesbos/commit/16033acb2eb9f24f8628397c180fd55896577ee9) - add @changesets/changelog-github

## 1.2.0

### Minor Changes

- 4463abd: **project folder structure change**

  - create src/ directory
  - move .eslintrc.js and typescript.js file to src/
  - change eslint config location in package.json file

## 1.1.3

### Patch Changes

- e20c2ad: update readme

## 1.1.2

### Patch Changes

- 80f0651: remove @changesets/changelog-github

## 1.1.1

### Patch Changes

- c7a26a2: **eslintrc.js**

  - allow 'no-plusplus' for 'forloop'
  - disable react-in-jsx-scope

- d0306ba: **.eslintrc.js/typescript.js**

  - rules sort by a-z

## 1.1.0

### Minor Changes

- [`50e8b30`](https://github.com/frontendfixer/-frontendfixer-eslint-config-wesbos/commit/50e8b30f07e0ff433e46f8bf6a8f498fb6b1511c) - ## changeset

  - Add changeset to automate npm package publishing

### Patch Changes

- ## changeset/actions

  - Add changeset actions
  - Use pnpm as node modular
  - Use node v.16
  - Automatic package publish to npm registry

  ## tsconfig.json

  1. fix include no file selected
  2. Add exclude node_modules directory and .spec.ts,.d.ts files from linting
