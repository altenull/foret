/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { fieldsetStyles, legendStyles } from '../../shared/styles/form.styles';
import { Subtitle2 } from '../../typography';
import Checkbox from './Checkbox';
import { CheckboxGroupProps } from './models/checkbox-group-props';

const CheckboxGroup: ForwardRefExoticComponent<CheckboxGroupProps & RefAttributes<any>> = forwardRef<
  any,
  CheckboxGroupProps
>(({ children, legendText, disabled = false, onChange = () => {} }: CheckboxGroupProps, ref?: any) => {
  const handleChange = (id: string, newChecked: boolean) => {
    onChange(id, newChecked);
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
    <form ref={ref}>
      <fieldset css={fieldsetStyles}>
        {!!legendText && (
          <legend css={legendStyles}>
            <Subtitle2>{legendText}</Subtitle2>
          </legend>
        )}
        {getCheckboxes()}
      </fieldset>
    </form>
  );
});

export default CheckboxGroup;
