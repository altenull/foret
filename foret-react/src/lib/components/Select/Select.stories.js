import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import Select from './Select';

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
        <option value='dog'>Dog</option>
        <option value='cat'>Cat</option>
        <option value='hamster'>Hamster</option>
        <option value='parrot'>Parrot</option>
        <option value='spider'>Spider</option>
        <option value='goldfish'>Goldfish</option>
      </Select>
    </StorybookTemplate>
  );
};

export const withPlaceHolderSelect = () => {
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
        placeHolder={'Please choose an option'}
        onChange={customHandleChange}>
        <option value='dog'>Dog</option>
        <option value='cat'>Cat</option>
        <option value='hamster'>Hamster</option>
        <option value='parrot'>Parrot</option>
        <option value='spider'>Spider</option>
        <option value='goldfish'>Goldfish</option>
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
        placeHolder={'Please choose an option'}
        disabled={true}>
        <option value='dog'>Dog</option>
        <option value='cat'>Cat</option>
        <option value='hamster'>Hamster</option>
        <option value='parrot'>Parrot</option>
        <option value='spider'>Spider</option>
        <option value='goldfish'>Goldfish</option>
      </Select>
    </StorybookTemplate>
  );
};
