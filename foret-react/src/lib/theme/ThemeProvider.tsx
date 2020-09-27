/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { createTheme } from './utils/theme.util';

const ThemeProvider = ({ theme, children }) => {
  const mergedTheme = createTheme(theme);

  return <EmotionThemeProvider theme={mergedTheme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
