import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import Select from './Select';
import SelectItem from './SelectItem';
import SelectItemGroup from './SelectItemGroup';

export default {
  title: 'components/Select',
};

export const withSelect = () => {
  const customHandleChange = (newValue, id, name) => {
    console.log(`custom handle change(newValue): ${newValue}`);
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(name): ${name}`);
  };

  return (
    <StorybookTemplate>
      <Select id={'select'} name={'foret-react-select'} legendText={'select'} onChange={customHandleChange}>
        <SelectItem value={'dog'} itemText={'Dog'} />
        <SelectItem value={'cat'} itemText={'Cat'} disabled={true} />
        <SelectItem value={'hamster'} itemText={'Hamster'} disabled={true} />
        <SelectItem value={'parrot'} itemText={'Parrot'} />
        <SelectItem value={'spider'} itemText={'Spider'} />
        <SelectItem value={'goldfish'} itemText={'Goldfish'} />
      </Select>
    </StorybookTemplate>
  );
};

export const withGrouppedSelect = () => {
  const customHandleChange = (newValue, id, name) => {
    console.log(`custom handle change(newValue): ${newValue}`);
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(name): ${name}`);
  };

  return (
    <StorybookTemplate>
      <Select id={'select'} name={'foret-react-select'} legendText={'select'} onChange={customHandleChange}>
        <SelectItemGroup label={'Category 1'}>
          <SelectItem value={'dog'} itemText={'Dog'} />
          <SelectItem value={'cat'} itemText={'Cat'} />
          <SelectItem value={'hamster'} itemText={'Hamster'} />
        </SelectItemGroup>

        <SelectItemGroup label={'Category 2'} disabled={true}>
          <SelectItem value={'parrot'} itemText={'Parrot'} />
          <SelectItem value={'spider'} itemText={'Spider'} />
          <SelectItem value={'goldfish'} itemText={'Goldfish'} />
        </SelectItemGroup>
      </Select>
    </StorybookTemplate>
  );
};

export const withPlaceholderSelect = () => {
  const customHandleChange = (newValue, id, name) => {
    console.log(`custom handle change(newValue): ${newValue}`);
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(name): ${name}`);
  };

  return (
    <StorybookTemplate>
      <Select
        id={'select'}
        name={'foret-react-select'}
        legendText={'select'}
        placeholder={'Please choose an option'}
        onChange={customHandleChange}>
        <SelectItem value={'dog'} itemText={'Dog'} />
        <SelectItem value={'cat'} itemText={'Cat'} disabled={true} />
        <SelectItem value={'hamster'} itemText={'Hamster'} disabled={true} />
        <SelectItem value={'parrot'} itemText={'Parrot'} />
        <SelectItem value={'spider'} itemText={'Spider'} />
        <SelectItem value={'goldfish'} itemText={'Goldfish'} />
      </Select>
    </StorybookTemplate>
  );
};

export const withDisabledSelect = () => {
  return (
    <StorybookTemplate>
      <Select
        id={'disabled-select'}
        name={'foret-react-disabled-select'}
        legendText={'select'}
        placeholder={'Please choose an option'}
        disabled={true}>
        <SelectItem value={'dog'} itemText={'Dog'} />
        <SelectItem value={'cat'} itemText={'Cat'} disabled={true} />
        <SelectItem value={'hamster'} itemText={'Hamster'} disabled={true} />
        <SelectItem value={'parrot'} itemText={'Parrot'} />
        <SelectItem value={'spider'} itemText={'Spider'} />
        <SelectItem value={'goldfish'} itemText={'Goldfish'} />
      </Select>
    </StorybookTemplate>
  );
};
