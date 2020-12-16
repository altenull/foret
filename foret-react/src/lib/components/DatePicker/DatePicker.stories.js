import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import DatePicker from './DatePicker';

export default {
  title: 'components/DatePicker',
};

export const withDatePicker = () => {
  const customHandleChange = (newSelectedDate, id) => {
    console.log(`custom handle change(newSelectedDate): ${newSelectedDate}`);
    console.log(`custom handle change(id): ${id}`);
  };

  return (
    <StorybookTemplate>
      <DatePicker id='date-picker' onChange={customHandleChange} />
    </StorybookTemplate>
  );
};
