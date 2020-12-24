import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'components/Checkbox',
};

export const checkbox = () => {
  const customHandleChange = (newChecked, id) => {
    console.log(`custom handle change(newChecked): ${newChecked}`);
    console.log(`custom handle change(id): ${id}`);
  };

  return (
    <StorybookTemplate>
      <CheckboxGroup legendText={'Checkbox'} onChange={customHandleChange}>
        <Checkbox id={'checkbox-1'} labelText={'option 1'} />
        <Checkbox id={'checkbox-2'} labelText={'option 2'} checked={true} />
        <Checkbox id={'checkbox-3'} labelText={'option 3'} checked={true} />
      </CheckboxGroup>
    </StorybookTemplate>
  );
};

export const withDisabled = () => {
  return (
    <StorybookTemplate>
      <CheckboxGroup legendText={'Checkbox'} disabled={true}>
        <Checkbox id={'disabled-checkbox-1'} labelText={'option 1'} />
        <Checkbox id={'disabled-checkbox-2'} labelText={'option 2'} checked={true} />
        <Checkbox id={'disabled-checkbox-3'} labelText={'option 3'} checked={true} />
      </CheckboxGroup>
    </StorybookTemplate>
  );
};
