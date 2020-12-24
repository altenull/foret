import { add, getDate, getDaysInMonth, sub } from 'date-fns';
import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import DatePicker from './DatePicker';

export default {
  title: 'components/DatePicker',
};

export const datePicker = () => {
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

export const withSelectedDate = () => {
  const customHandleChange = (newSelectedDate, id) => {
    console.log(`custom handle change(newSelectedDate): ${newSelectedDate}`);
    console.log(`custom handle change(id): ${id}`);
  };

  const today = new Date();
  const daysInMonth = getDaysInMonth(today);

  const selectedDate =
    getDate(today) >= 1 && getDate(today) < daysInMonth ? add(today, { days: 1 }) : sub(today, { days: 1 });

  return (
    <StorybookTemplate>
      <DatePicker id='selected-date-date-picker' selectedDate={selectedDate} onChange={customHandleChange} />
    </StorybookTemplate>
  );
};

export const withLocale = () => {
  const customHandleChange = (newSelectedDate, id) => {
    console.log(`custom handle change(newSelectedDate): ${newSelectedDate}`);
    console.log(`custom handle change(id): ${id}`);
  };

  return (
    <StorybookTemplate>
      <DatePicker id='locale-date-picker' locale='ko' onChange={customHandleChange} />
    </StorybookTemplate>
  );
};
