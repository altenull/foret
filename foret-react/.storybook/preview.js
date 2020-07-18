import { Color } from '@altenull/foret-core';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { description, version } from '../package.json';

const theme = create({
  base: 'light',
  brandTitle: `${description} ${version}`,
  showPanel: true,
});

addParameters({
  backgrounds: [
    { name: 'paper', value: Color.Paper, default: true },
    { name: 'white', value: Color.White },
  ],
  options: {
    theme,
  },
});
