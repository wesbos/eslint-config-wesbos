const { FlatCompat } = require('@eslint/eslintrc');
const legacyWes = require('./.eslintrc.js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const x = compat.config(legacyWes);
console.log(x);
// const html = compat.plugins('html');
// console.dir(JSON.stringify(html), { depth: null });
// console.log('----------------');

module.exports = [
  {
    files: ['**/*.html'],
  },
  ...compat.config(legacyWes),
];
