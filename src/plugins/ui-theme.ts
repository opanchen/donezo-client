import { createThemes } from 'tw-colors';

export const uiColorTheme = createThemes({
  light: {
    'color-text-primary': '#161616',
    'color-text-secondary': '#707070',
    'color-bg-primary': '#FDFDFD',
    'color-bg-secondary': '#EDEDED',
    // ...other colors
  },
  dark: {
    'color-text-primary': '#FFFFFF',
    'color-text-secondary': '#A0A0A0',
    'color-bg-primary': '#232323',
    'color-bg-secondary': '#1A1A1A',
  },
  violet: {
    'color-text-primary': '#FFFFFF',
    'color-text-secondary': '#E0E0FF',
    'color-bg-primary': '#D6D8FF',
    'color-bg-secondary': '#B0B3FF',
  },
});
