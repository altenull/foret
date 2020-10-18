import { action } from '@storybook/addon-actions';
import React from 'react';
import { StorybookSpacing, StorybookTemplate } from '../../storybook-util';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import DangerButton from './DangerButton';

export default {
  title: 'components/Button',
};

export const withPrimaryButton = () => (
  <StorybookTemplate>
    <PrimaryButton onClick={action('primary button clicked')}>primary button</PrimaryButton>

    <StorybookSpacing />

    <PrimaryButton disabled={true}>primary button</PrimaryButton>
  </StorybookTemplate>
);

export const withSecondaryButton = () => (
  <StorybookTemplate>
    <SecondaryButton onClick={action('secondary button clicked')}>secondary button</SecondaryButton>

    <StorybookSpacing />

    <SecondaryButton disabled={true}>secondary button</SecondaryButton>
  </StorybookTemplate>
);

export const withDangerButton = () => (
  <StorybookTemplate>
    <DangerButton onClick={action('danger button clicked')}>danger button</DangerButton>

    <StorybookSpacing />

    <DangerButton disabled={true}>danger button</DangerButton>
  </StorybookTemplate>
);
