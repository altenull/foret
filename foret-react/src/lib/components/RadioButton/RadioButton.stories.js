import React from 'react';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

export default {
  title: 'components|RadioButton',
};

export const withRadioButton = () => {
  const customHandleChange = (newSelection, name, event) => {
    console.log(`custom handle change(newSelection): ${newSelection}`);
    console.log(`custom handle change(name): ${name}`);
    console.log(`custom handle change(event): ${event}`);
  };

  return (
    <RadioButtonGroup
      legendText={'Select your option'}
      selectedValue={'radioButton2'}
      name={'sample-radio-button'}
      onChange={customHandleChange}>
      <RadioButton id={'radio-button-1'} labelText={'Radio button 1'} value={'radioButton1'} />
      <RadioButton id={'radio-button-2'} labelText={'Radio button 2'} value={'radioButton2'} />
      <RadioButton id={'radio-button-3'} labelText={'Radio button 3'} value={'radioButton3'} />
    </RadioButtonGroup>
  );
};

export const withDisabledRadioButton = () => {
  return (
    <RadioButtonGroup
      legendText={`Can't select your option`}
      selectedValue={'disabledRadioButton2'}
      name={'sample-disabled-radio-button'}
      disabled={true}>
      <RadioButton
        id={'disabled-radio-button-1'}
        labelText={'Disabled Radio button 1'}
        value={'disabledRadioButton1'}
      />
      <RadioButton
        id={'disabled-radio-button-2'}
        labelText={'Disabled Radio button 2'}
        value={'disabledRadioButton2'}
      />
      <RadioButton
        id={'disabled-radio-button-3'}
        labelText={'Disabled Radio button 3'}
        value={'disabledRadioButton3'}
      />
    </RadioButtonGroup>
  );
};
