module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'tailwind.checkbox.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
    "semi": [
      "error",
      "never",
      {
        "beforeStatementContinuationChars": "always"
      }
    ],
    "no-extra-semi": "off",
    "@typescript-eslint/no-explicit-any": ['warn']
  },
}
