import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import DatePicker from './DatePicker';

export default {
  title: 'components/DatePicker',
};

export const withDatePicker = () => {
  return (
    <StorybookTemplate>
      <DatePicker />
    </StorybookTemplate>
  );
};
