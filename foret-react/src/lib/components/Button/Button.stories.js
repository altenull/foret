import React from 'react';
import { action } from '@storybook/addon-actions';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default {
  title: 'components|Button',
};

export const withPrimaryButton = () => (
  <div>
    <PrimaryButton onClick={action('primary button clicked')}>primary button</PrimaryButton>
    <br />
    <br />
    <PrimaryButton disabled={true}>primary button (disabled)</PrimaryButton>
  </div>
);

export const withSecondaryButton = () => (
  <div>
    <SecondaryButton onClick={action('secondary button clicked')}>secondary button</SecondaryButton>
    <br />
    <br />
    <SecondaryButton disabled={true}>secondary button (disabled)</SecondaryButton>
  </div>
);
