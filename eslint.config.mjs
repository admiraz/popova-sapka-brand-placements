// Native ESLint 9+ flat config, composed directly from each plugin's own
// flat-config export rather than through eslint-config-next's legacy
// shareable configs. As of this writing, bridging eslint-config-next via
// @eslint/eslintrc's FlatCompat crashes ("Converting circular structure to
// JSON") because eslint-plugin-react now ships a self-referencing
// `configs.flat` alongside its legacy `configs.recommended`, which the old
// FlatCompat config-validator can't serialize while formatting an error.
// Composing the plugins' native flat exports directly sidesteps that bridge
// entirely and covers the same rule set (Next.js, TypeScript, React Hooks,
// accessibility).
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nextPlugin from "@next/eslint-plugin-next";

export default tseslint.config(
  {
    ignores: [
      "out/**",
      ".next/**",
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      "public/**",
      "next-env.d.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs["recommended-latest"].rules,
  },
  {
    plugins: { "jsx-a11y": jsxA11y },
    rules: jsxA11y.configs.recommended.rules,
    languageOptions: {
      parserOptions: jsxA11y.configs.recommended.parserOptions,
    },
  },
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
);
