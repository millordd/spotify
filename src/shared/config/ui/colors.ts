import tailwindColors from 'tailwindcss/colors';

// Remove deprecated colors in default tailwind palette to fix warning
// @ts-expect-error: ignore a compile error like this unreachable code
delete tailwindColors.lightBlue;
// @ts-expect-error: ...
delete tailwindColors.warmGray;
// @ts-expect-error: ...
delete tailwindColors.trueGray;
// @ts-expect-error: ...
delete tailwindColors.coolGray;
// @ts-expect-error: ...
delete tailwindColors.blueGray;

const customColors = {
  dark: {
    50: '#f5f5f5',
    100: '#e7e7e7',
    200: '#cdcdcd',
    300: '#b2b2b2',
    400: '#9a9a9a',
    500: '#8b8b8b',
    600: '#848484',
    700: '#242424',
    800: '#000000',
    900: '#121212',
  },
};

/**
 * Extend default Tailwind color palette with missing Mantine colors
 * NOTE: Mantine supports only 10 colors in each color-shade
 */
const colors = {
  ...tailwindColors,
  // Mantine colors, that's missing in tw palette
  // generate colors through https://mantine.dev/colors-generator
  ...customColors,
};

export { colors };
