/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { Subtitle2 } from '../../typography';
import Checkbox from './Checkbox';
import { CheckboxGroupProps } from './models/checkbox-group-props';

const fieldSetStyles = css({
  display: 'inline-flex',
  margin: 0,
  padding: 0,
  border: 'none',
});

const legendStyles = css({
  padding: 0,
  border: 'none',
  marginBottom: '12px',
});

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
