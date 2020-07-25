/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { ChevronDownIcon } from '../../shared/icons';
import { subtitle1Styles, subtitle2Styles } from '../../typography/utils/typography.utils';
import { SelectProps } from './models/select-props';
import SelectItem from './SelectItem';

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
    color: Color.Ink,
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.15s ease-in-out',
    '&:focus': {
      boxShadow: 'rgba(46, 139, 87, 0.35) 0 0 0 3px',
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
  name,
  legendText,
  selectedValue,
  placeHolder,
  disabled,
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
    onChange(event.target.value, id, name);
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
            name={name}
            disabled={disabled}
            defaultValue={selectedValue || ''}
            onChange={handleChange}
            {...props}>
            {!!placeHolder && <SelectItem hidden={true} disabled={true} value={''} itemText={placeHolder}></SelectItem>}
            {children}
          </select>

          <ChevronDownIcon css={chevronDownSelectStyles(isHovered, disabled)}></ChevronDownIcon>
        </div>
      </div>
    </div>
  );
};

export default Select;
