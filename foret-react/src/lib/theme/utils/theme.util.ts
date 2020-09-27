const deepmerge = require('deepmerge');

import { createColors } from './color.util';
import { createFontWeights } from './font-weight.util';
import { createMediaQueries } from './media-query.util';

const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '450ms',
  slowest: '600ms',
};

const defaultTheme = {
  duration,
};

export const createTheme = (theme = {}) => {
  const mergedTheme = deepmerge(defaultTheme, theme);

  return {
    ...mergedTheme,
    colors: createColors(),
    fontWeights: createFontWeights(),
    mediaQueries: createMediaQueries(),
  };
};
