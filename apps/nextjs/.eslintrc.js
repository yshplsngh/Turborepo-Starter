/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    "next.config.mjs",
    "postcss.config.mjs",
    // Add any other configuration files you want to exclude
  ],
};
