import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'components/Checkbox',
};

export const withCheckbox = () => {
  const customHandleChange = (newChecked, id, event) => {
    console.log(`custom handle change(newChecked): ${newChecked}`);
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(event): ${event}`);
  };

  return (
    <StorybookTemplate>
      <CheckboxGroup legendText={'checkbox'} name={'foret-react-checkbox'} onChange={customHandleChange}>
        <Checkbox id={'checkbox-1'} labelText={'option 1'} value={'checkbox1'} />
        <Checkbox id={'checkbox-2'} labelText={'option 2'} value={'checkbox2'} checked />
        <Checkbox id={'checkbox-3'} labelText={'option 3'} value={'checkbox3'} checked />
      </CheckboxGroup>
    </StorybookTemplate>
  );
};

export const withDisabledCheckbox = () => {
  return (
    <StorybookTemplate>
      <CheckboxGroup legendText={'checkbox'} name={'foret-react-disabled-checkbox'} disabled={true}>
        <Checkbox id={'disabled-checkbox-1'} labelText={'option 1'} value={'disabledCheckbox1'} />
        <Checkbox id={'disabled-checkbox-2'} labelText={'option 2'} value={'disabledCheckbox2'} checked />
        <Checkbox id={'disabled-checkbox-3'} labelText={'option 3'} value={'disabledCheckbox3'} checked />
      </CheckboxGroup>
    </StorybookTemplate>
  );
};
