/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from '@fullstacksjs/eslint-config';
import globals from 'globals';

export default defineConfig({
   typescript: true,
   files: ['./src/**/*.ts'],
   languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
   },
   rules: {
      '@typescript-eslint/no-namespace': 'off',
   },
});
