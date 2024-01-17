/** @type {import('tailwindcss').Config} */

import { colors } from './src/shared/config';

module.exports = {
  content: ['./src/**/*.{ts,tsx,html,css,svg}'],
  corePlugins: { preflight: false },
  darkMode: 'class',
  theme: {
    // this is for intellisence
    extends: { colors },
    // and this is overriding colors
    colors,
  },
  plugins: [],
};
