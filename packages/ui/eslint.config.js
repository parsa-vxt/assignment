/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from '@fullstacksjs/eslint-config';
import globals from 'globals';

export default defineConfig({
   typescript: true,
   files: ['**/*.{ts,tsx}'],
   languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
   },
});
