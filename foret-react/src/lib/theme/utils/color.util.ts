import { Color } from '@altenull/foret-core';
import { toCamelCase } from './shared.util';

export const createColors: () => { [colorInCamelCase: string]: string } = () =>
  Object.keys(Color).reduce((acc, key) => {
    return {
      ...acc,
      [toCamelCase(key)]: Color[key],
    };
  }, {});
