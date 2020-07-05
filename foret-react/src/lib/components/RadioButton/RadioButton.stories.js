import React from 'react';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

export default {
  title: 'RadioButton',
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
