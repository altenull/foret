import { Color } from '@altenull/foret-core';
import { addParameters } from '@storybook/angular';

addParameters({
  backgrounds: [
    { name: 'paper', value: Color.Paper, default: true },
    { name: 'white', value: Color.White },
  ],
});
