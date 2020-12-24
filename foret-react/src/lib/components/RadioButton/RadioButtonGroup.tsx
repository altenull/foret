/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { forwardRef, useState } from 'react';
import { fieldsetStyles, legendStyles } from '../../shared/styles/form.styles';
import { Subtitle2 } from '../../typography';
import { RadioButtonGroupProps } from './models/radio-button-group-props';
import RadioButton from './RadioButton';

const RadioButtonGroup = forwardRef<HTMLFormElement, RadioButtonGroupProps>(
  ({ children, legendText, checkedValue, disabled = false, onChange = () => {} }: RadioButtonGroupProps, ref) => {
    const [checked, setChecked] = useState<string>(checkedValue);

    const handleChange = (id: string, newCheckedValue: string) => {
      if (newCheckedValue !== checked) {
        setChecked(newCheckedValue);
        onChange(id, newCheckedValue);
      }
    };

    const getRadioButtons = () =>
      React.Children.map(children, (radioButton) => {
        if (React.isValidElement(radioButton)) {
          const { value, ...props } = radioButton.props;

          return (
            <RadioButton
              key={value}
              value={value}
              checked={value === checked}
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
      <form ref={ref}>
        <fieldset css={fieldsetStyles}>
          {!!legendText && (
            <legend css={legendStyles}>
              <Subtitle2>{legendText}</Subtitle2>
            </legend>
          )}
          {getRadioButtons()}
        </fieldset>
      </form>
    );
  }
);

export default RadioButtonGroup;
