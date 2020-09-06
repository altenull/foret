import React from 'react';
import { StorybookSpacing, StorybookTemplate } from '../../storybook-util';
import Toggle from './Toggle';

export default {
  title: 'components/Toggle',
};

export const withToggle = () => {
  const customHandleToggle = (id, newChecked) => {
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(newChecked): ${newChecked}`);
  };

  return (
    <StorybookTemplate>
      <Toggle id={'toggle-1'} checked={true} onToggle={customHandleToggle} />

      <StorybookSpacing />

      <Toggle id={'toggle-2'} onToggle={customHandleToggle} />
    </StorybookTemplate>
  );
};

export const withDisabledToggle = () => {
  return (
    <StorybookTemplate>
      <Toggle id={'disabled-toggle-1'} checked={true} disabled={true} />

      <StorybookSpacing />

      <Toggle id={'disabled-toggle-2'} disabled={true} />
    </StorybookTemplate>
  );
};
