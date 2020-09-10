import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

export default {
  title: 'components/RadioButton',
};

export const withRadioButton = () => {
  const customHandleChange = (id, newSelectedValue) => {
    console.log(`custom handle change(id): ${id}`);
    console.log(`custom handle change(newSelectedValue): ${newSelectedValue}`);
  };

  return (
    <StorybookTemplate>
      <RadioButtonGroup legendText={'Radio button'} selectedValue={'radioButton2'} onChange={customHandleChange}>
        <RadioButton id={'radio-button-1'} labelText={'option 1'} value={'radioButton1'} />
        <RadioButton id={'radio-button-2'} labelText={'option 2'} value={'radioButton2'} />
        <RadioButton id={'radio-button-3'} labelText={'option 3'} value={'radioButton3'} />
      </RadioButtonGroup>
    </StorybookTemplate>
  );
};

export const withDisabledRadioButton = () => {
  return (
    <StorybookTemplate>
      <RadioButtonGroup legendText={'Radio button'} selectedValue={'disabledRadioButton2'} disabled={true}>
        <RadioButton id={'disabled-radio-button-1'} labelText={'option 1'} value={'disabledRadioButton1'} />
        <RadioButton id={'disabled-radio-button-2'} labelText={'option 2'} value={'disabledRadioButton2'} />
        <RadioButton id={'disabled-radio-button-3'} labelText={'option 3'} value={'disabledRadioButton3'} />
      </RadioButtonGroup>
    </StorybookTemplate>
  );
};
