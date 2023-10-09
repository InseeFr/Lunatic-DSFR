module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  "rules": {
     "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "no-extra-boolean-cast": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};