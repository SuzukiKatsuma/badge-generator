import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import typescriptEslintParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    ...js.configs.recommended,
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      stylistic,
      react,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.browser,
        },
      },
    },
    rules: {
      'stylistic/indent': ['error', 2],
      'stylistic/linebreak-style': ['error', 'unix'],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/semi': ['error', 'always'],
      'react/jsx-uses-react': 'error',
    },
  },
];
