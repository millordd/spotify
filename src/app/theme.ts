import type {
  CSSVariablesResolver,
  MantineColorsTuple,
  MantineThemeOverride,
} from '@mantine/core';
import { createTheme, rem, useMantineColorScheme } from '@mantine/core';

import { colors } from '../shared/config';

type CustomColors = keyof typeof colors;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, MantineColorsTuple>;
  }
}

/**
 * convert tailwind colors to mantine:
 * @see https://github.com/orgs/mantinedev/discussions/1205
 */
const mantineColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([_, v]) => typeof v !== 'string')
    .map(([k, v]) => [k, Object.values(v)])
);

export const theme = createTheme({
  colors: mantineColors,

  primaryColor: 'green',

  breakpoints: {
    xs: '380px',
    sm: '448px',
    md: '768px',
    lg: '1280px',
    xl: '1620px',
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  dark: {
    '--mantine-color-body': 'black',
  },
  variables: {
    '--mantine-hero-height': theme.other.heroHeight,
  },
  light: {
    '--mantine-color-deep-orange': theme.other.deepOrangeLight,
  },
});

const useTailwindColorScheme = () => {
  const toggleColorScheme = () => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    }
  };

  return { toggleColorScheme };
};

export const useColorScheme = () => {
  const mantineColorScheme = useMantineColorScheme({
    keepTransitions: true,
  });
  const tailwindColorScheme = useTailwindColorScheme();

  const toggleColorScheme = () => {
    mantineColorScheme.toggleColorScheme();
    tailwindColorScheme.toggleColorScheme();
  };

  return { ...mantineColorScheme, toggleColorScheme };
};
