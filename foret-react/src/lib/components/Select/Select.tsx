/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React from 'react';
import { subtitle1Styles, subtitle2Styles } from '../../typography/utils/typography.utils';
import { SelectProps } from './models/select-props';

const legendStyles = css(subtitle2Styles, {
  display: 'inline-block',
  marginBottom: '12px',
});

const selectStyles = css(subtitle1Styles, {
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'block',
  height: '48px',
  border: '1px solid',
  borderColor: Color.Stone,
  borderRadius: '4px',
  padding: '0 16px',
  color: Color.Ink,
  outline: 'none',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    borderColor: Color.Black,
  },
  '&:focus': {
    boxShadow: 'rgba(46, 139, 87, 0.35) 0 0 0 3px',
  },
  '&:disabled': {
    borderColor: Color.Fog,
    color: Color.Fog,
    cursor: 'not-allowed',
  },
});

const Select: React.FC<SelectProps> = ({
  children,
  id,
  name,
  legendText,
  selectedValue,
  placeHolder,
  disabled,
  onChange = () => {},
  ...props
}: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value, id, name);
  };

  return (
    <div>
      {!!legendText && (
        <label css={legendStyles} htmlFor={id} aria-label={legendText}>
          {legendText}
        </label>
      )}
      <select
        css={selectStyles}
        id={id}
        name={name}
        disabled={disabled}
        defaultValue={selectedValue || ''}
        onChange={handleChange}
        {...props}>
        {!!placeHolder && (
          <option disabled hidden value={''}>
            {placeHolder}
          </option>
        )}
        {children}
      </select>
    </div>
  );
};

export default Select;
