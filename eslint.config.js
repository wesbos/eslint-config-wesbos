import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslint from "@eslint/js";
import globals from 'globals';
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.__dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = tseslint.config(
  ...fixupPluginRules("airbnb"),
  // Eslint Reccomended
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jquery,
        ...globals.jest,
      },
    },
    rules: {},
  }
);

console.log(config);

export default config;
