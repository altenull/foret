import { addParameters } from '@storybook/react';
import { Color } from '@altenull/foret-core';

addParameters({
  backgrounds: [
    { name: 'paper', value: Color.Paper, default: true },
    { name: 'white', value: Color.White },
  ],
});
