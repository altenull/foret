import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton } from './PrimaryButton';

export default {
  title: 'Button',
};

export const withPrimaryButton = () => (
  <div>
    <PrimaryButton onClick={action('primary button clicked')}>primary button</PrimaryButton>
    <br />
    <br />
    <PrimaryButton disabled={true}>primary button (disabled)</PrimaryButton>
  </div>
);
