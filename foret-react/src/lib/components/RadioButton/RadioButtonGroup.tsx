/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { RadioButtonGroupProps } from './models/radio-button-group-props';
import RadioButton from './RadioButton';

const fieldSetStyles = css({
  display: 'inline-flex',
  margin: 0,
  padding: 0,
  border: 'none',
});

const legendStyles = css({
  padding: 0,
  border: 'none',
});

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  legendText,
  selectedValue,
  name,
  onChange = () => {},
}: RadioButtonGroupProps) => {
  const [selected, setSelected] = useState<string>(selectedValue);

  const handleChange = (newSelection: string, name: string, event: React.ChangeEvent<HTMLInputElement>) => {
    if (newSelection !== selected) {
      setSelected(newSelection);
      onChange(newSelection, name, event);
    }
  };

  const getRadioButtons = () =>
    React.Children.map(children, (radioButton) => {
      if (radioButton.props != null) {
        const { value, ...props } = radioButton.props;

        return (
          <RadioButton
            key={value}
            name={name}
            value={value}
            checked={value === selected}
            onChange={handleChange}
            {...props}
          />
        );
      }
    });

  return (
    <form>
      <fieldset css={fieldSetStyles}>
        {!!legendText && <legend css={legendStyles}>{legendText}</legend>}
        {getRadioButtons()}
      </fieldset>
    </form>
  );
};

export default RadioButtonGroup;
