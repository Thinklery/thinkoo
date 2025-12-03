const { defineConfig } = require("eslint/config");
const expo = require("eslint-config-expo/flat");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");
const prettier = require("eslint-config-prettier");
const reactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expo,

  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: [
          "./tsconfig.json",
          "./apps/*/tsconfig.json",
          "./packages/*/tsconfig.json"
        ]
      }
    },

    plugins: {
      "@typescript-eslint": tseslint
    },
  },

  prettier,

  {
    plugins: { "react-native": reactNative },
    rules: reactNative.configs.all.rules
  }
]);
