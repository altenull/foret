/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { fieldSetStyles, legendStyles } from '../../shared/styles/form.styles';
import { Subtitle2 } from '../../typography';
import { RadioButtonGroupProps } from './models/radio-button-group-props';
import RadioButton from './RadioButton';

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  legendText,
  selectedValue,
  name,
  disabled,
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
      if (React.isValidElement(radioButton)) {
        const { value, ...props } = radioButton.props;

        return (
          <RadioButton
            key={value}
            name={name}
            value={value}
            checked={value === selected}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />
        );
      } else {
        return radioButton;
      }
    });

  return (
    <form>
      <fieldset css={fieldSetStyles}>
        {!!legendText && (
          <legend css={legendStyles}>
            <Subtitle2>{legendText}</Subtitle2>
          </legend>
        )}
        {getRadioButtons()}
      </fieldset>
    </form>
  );
};

export default RadioButtonGroup;
