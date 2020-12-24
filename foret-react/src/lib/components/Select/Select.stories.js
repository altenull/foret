import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import Select from './Select';
import SelectItem from './SelectItem';
import SelectItemGroup from './SelectItemGroup';

export default {
  title: 'components/Select',
};

export const select = () => {
  const customHandleChange = (id, newSelectedValue) => {
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(newSelectedValue): ${newSelectedValue}`);
  };

  return (
    <StorybookTemplate>
      <Select id={'select'} legendText={'select'} selectedValue={'option2'} onChange={customHandleChange}>
        <SelectItem value={'option1'} labelText={'option 1'} />
        <SelectItem value={'option2'} labelText={'option 2'} />
        <SelectItem value={'option3'} labelText={'option 3'} disabled={true} />
        <SelectItem value={'option4'} labelText={'option 4'} disabled={true} />
        <SelectItem value={'option5'} labelText={'option 5'} />
        <SelectItem value={'option6'} labelText={'option 6'} />
      </Select>
    </StorybookTemplate>
  );
};

export const withGroup = () => {
  const customHandleChange = (id, newSelectedValue) => {
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(newSelectedValue): ${newSelectedValue}`);
  };

  return (
    <StorybookTemplate>
      <Select id={'grouped-select'} legendText={'select'} selectedValue={'option2'} onChange={customHandleChange}>
        <SelectItemGroup labelText={'Category 1'}>
          <SelectItem value={'option1'} labelText={'option 1'} />
          <SelectItem value={'option2'} labelText={'option 2'} />
          <SelectItem value={'option3'} labelText={'option 3'} disabled={true} />
        </SelectItemGroup>

        <SelectItemGroup labelText={'Category 2'} disabled={true}>
          <SelectItem value={'option4'} labelText={'option 4'} />
          <SelectItem value={'option5'} labelText={'option 5'} />
          <SelectItem value={'option6'} labelText={'option 6'} />
        </SelectItemGroup>
      </Select>
    </StorybookTemplate>
  );
};

export const withPlaceholder = () => {
  const customHandleChange = (id, newSelectedValue) => {
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(newSelectedValue): ${newSelectedValue}`);
  };

  return (
    <StorybookTemplate>
      <Select
        id={'select-with-placeholder'}
        legendText={'select'}
        placeholder={'Please choose an option'}
        onChange={customHandleChange}>
        <SelectItem value={'option1'} labelText={'option 1'} />
        <SelectItem value={'option2'} labelText={'option 2'} />
        <SelectItem value={'option3'} labelText={'option 3'} disabled={true} />
        <SelectItem value={'option4'} labelText={'option 4'} disabled={true} />
        <SelectItem value={'option5'} labelText={'option 5'} />
        <SelectItem value={'option6'} labelText={'option 6'} />
      </Select>
    </StorybookTemplate>
  );
};

export const withDisabled = () => {
  return (
    <StorybookTemplate>
      <Select id={'disabled-select'} legendText={'select'} selectedValue={'option2'} disabled={true}>
        <SelectItem value={'option1'} labelText={'option 1'} />
        <SelectItem value={'option2'} labelText={'option 2'} />
        <SelectItem value={'option3'} labelText={'option 3'} />
        <SelectItem value={'option4'} labelText={'option 4'} />
        <SelectItem value={'option5'} labelText={'option 5'} />
        <SelectItem value={'option6'} labelText={'option 6'} />
      </Select>
    </StorybookTemplate>
  );
};
