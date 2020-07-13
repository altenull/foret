/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Subtitle2 } from '../../typography';
import Checkbox from './Checkbox';
import { CheckboxGroupProps } from './models/checkbox-group-props';
import { fieldSetStyles, legendStyles } from '../../shared/styles/form.styles';

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  legendText,
  disabled,
  onChange = () => {},
}: CheckboxGroupProps) => {
  const handleChange = (newChecked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(newChecked, id, event);
  };

  const getCheckboxes = () =>
    React.Children.map(children, (checkbox) => {
      if (React.isValidElement(checkbox)) {
        const { value, checked, ...props } = checkbox.props;

        return (
          <Checkbox
            key={value}
            value={value}
            checked={!!checked}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />
        );
      } else {
        return checkbox;
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
        {getCheckboxes()}
      </fieldset>
    </form>
  );
};

export default CheckboxGroup;
