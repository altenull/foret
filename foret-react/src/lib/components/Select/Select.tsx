/** @jsx jsx */
import { Color, hexToRgb } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { ChevronDownIcon } from '../../shared/icons';
import { subtitle1Styles, subtitle2Styles } from '../../typography/utils/typography.utils';
import { SelectProps } from './models/select-props';
import SelectItem from './SelectItem';

const foretGreenRgb = hexToRgb(Color.ForetGreen);

const selectWrapperStyles = css({
  display: 'inline-flex',
  flexDirection: 'column',
});

const legendStyles = css(subtitle2Styles, {
  display: 'inline-block',
  marginBottom: '12px',
});

const relativeBoxStyle = css({
  position: 'relative',
});

const selectStyles = (isHovered: boolean) =>
  css(subtitle1Styles, {
    appearance: 'none',
    boxSizing: 'border-box',
    display: 'block',
    height: '48px',
    border: '1px solid',
    borderColor: isHovered ? Color.Black : Color.Stone,
    borderRadius: '4px',
    padding: '0 48px 0 16px',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.15s ease-in-out',
    '&:focus': {
      boxShadow: `rgba(${foretGreenRgb.r}, ${foretGreenRgb.g}, ${foretGreenRgb.b}, 0.35) 0 0 0 3px`,
    },
    '&:disabled': {
      borderColor: Color.Fog,
      color: Color.Fog,
      cursor: 'not-allowed',
    },
  });

const chevronDownSelectStyles = (isHovered: boolean, disabled: boolean) =>
  css({
    position: 'absolute',
    top: '16px',
    right: '16px',
    pointerEvents: 'none',
    transition: 'fill 0.15s ease-in-out',
    fill: disabled ? Color.Fog : isHovered ? Color.Black : Color.Stone,
  });

const Select: React.FC<SelectProps> = ({
  children,
  id,
  legendText,
  selectedValue,
  placeholder,
  disabled = false,
  onChange = () => {},
  ...props
}: SelectProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovered(!disabled && true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(id, event.target.value);
  };

  return (
    <div>
      <div css={selectWrapperStyles}>
        {!!legendText && (
          <label css={legendStyles} htmlFor={id} aria-label={legendText}>
            {legendText}
          </label>
        )}

        <div css={relativeBoxStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <select
            css={selectStyles(isHovered)}
            id={id}
            disabled={disabled}
            defaultValue={selectedValue || ''}
            onChange={handleChange}
            {...props}>
            {!!placeholder && (
              <SelectItem hidden={true} disabled={true} value={''} labelText={placeholder}></SelectItem>
            )}
            {children}
          </select>

          <ChevronDownIcon css={chevronDownSelectStyles(isHovered, disabled)}></ChevronDownIcon>
        </div>
      </div>
    </div>
  );
};

export default Select;
