// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

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
