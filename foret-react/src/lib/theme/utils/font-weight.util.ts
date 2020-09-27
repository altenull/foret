import { FontWeight } from '@altenull/foret-core';
import { toCamelCase } from './shared.util';

export const createFontWeights = () =>
  Object.keys(FontWeight).reduce((acc, key) => {
    return {
      ...acc,
      [toCamelCase(key)]: FontWeight[key],
    };
  }, {});
