module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"]
      }
    }
  },
  plugins: ["import",
  "react",
  "react-hooks",
  "react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "react/jsx-no-target-blank": "off",
    "no-unused-vars": "warn",
    "eqeqeq": ["error", "always"],
    "react/prop-types": "off",

  },
}
