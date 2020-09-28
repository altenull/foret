import { Duration } from '../models/duration';
import { Theme } from '../models/theme';
import { createColors } from './color.util';
import { createFontWeights } from './font-weight.util';
import { createMediaQueries } from './media-query.util';
import { deepMerge } from './object.util';
import { createTextStyles } from './text-style.util';

const duration: Duration = {
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
};

const defaultTheme: Theme = {
  duration,
  colors: createColors(),
  fontWeights: createFontWeights(),
  mediaQueries: createMediaQueries(),
  textStyles: createTextStyles(),
};

export const createTheme: (theme?: {}) => Theme = (theme = {}) => deepMerge(defaultTheme, theme);
