import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'Toggle',
};

export const withToggle = () => {
  const customHandleChange = (newToggled, id, event) => {
    console.log(`custom handle change(newToggled): ${newToggled}`);
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(event): ${event}`);
  };

  return (
    <React.Fragment>
      <Toggle id={'toggle-1'} toggled onToggle={customHandleChange} />
      <Toggle id={'toggle-2'} onToggle={customHandleChange} />
    </React.Fragment>
  );
};

export const withDisabledToggle = () => {
  return (
    <React.Fragment>
      <Toggle id={'toggle-1'} toggled disabled />
      <Toggle id={'toggle-2'} disabled />
    </React.Fragment>
  );
};
