import React from 'react';
import { StorybookSpacing, StorybookTemplate } from '../../storybook-util';
import Toggle from './Toggle';

export default {
  title: 'components/Toggle',
};

export const withToggle = () => {
  const customHandleChange = (newToggled, id, event) => {
    console.log(`custom handle change(newToggled): ${newToggled}`);
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(event): ${event}`);
  };

  return (
    <StorybookTemplate>
      <Toggle id={'toggle-1'} toggled={true} onToggle={customHandleChange} />

      <StorybookSpacing />

      <Toggle id={'toggle-2'} onToggle={customHandleChange} />
    </StorybookTemplate>
  );
};

export const withDisabledToggle = () => {
  return (
    <StorybookTemplate>
      <Toggle id={'disabled-toggle-1'} toggled={true} disabled={true} />

      <StorybookSpacing />

      <Toggle id={'disabled-toggle-2'} disabled={true} />
    </StorybookTemplate>
  );
};
