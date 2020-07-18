import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'components|Checkbox',
};

export const withCheckbox = () => {
  const customHandleChange = (newChecked, id, event) => {
    console.log(`custom handle change(newChecked): ${newChecked}`);
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(event): ${event}`);
  };

  return (
    <StorybookTemplate>
      <CheckboxGroup legendText={'Check your options'} name={'sample-checkbox'} onChange={customHandleChange}>
        <Checkbox id={'checkbox-1'} labelText={'Checkbox 1'} value={'checkbox1'} checked />
        <Checkbox id={'checkbox-2'} labelText={'Checkbox 2'} value={'checkbox2'} />
      </CheckboxGroup>
    </StorybookTemplate>
  );
};

export const withDisabledCheckbox = () => {
  return (
    <StorybookTemplate>
      <CheckboxGroup legendText={`Can't check your option`} name={'sample-disabled-checkbox'} disabled={true}>
        <Checkbox id={'disabled-checkbox-1'} labelText={'Disabled Checkbox 1'} value={'disabledCheckbox1'} />
        <Checkbox id={'disabled-checkbox-2'} labelText={'Disabled Checkbox 2'} value={'disabledCheckbox2'} checked />
        <Checkbox id={'disabled-checkbox-3'} labelText={'Disabled Checkbox 3'} value={'disabledCheckbox3'} checked />
      </CheckboxGroup>
    </StorybookTemplate>
  );
};
