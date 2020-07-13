/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Subtitle1 } from '../../typography';
import { CheckboxProps } from './models/checkbox-props';

const checkboxWrapperStyles = css({
  display: 'inline-block',
  position: 'relative',
  '& + &': {
    marginTop: '16px',
  },
});

const inputStyles = css({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
});

const labelStyles = (disabled: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'initial' : 'pointer',
  });

const roundSquareBoxContainerStyles = css({
  position: 'relative',
  width: '24px',
  height: '24px',
  marginRight: '16px',
});

const roundSquareBoxStyles = (checked: boolean, disabled: boolean, isHovered: boolean, isFocused: boolean) =>
  css({
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'block',
    boxSizing: 'border-box',
    width: '24px',
    height: '24px',
    border: '1px solid',
    borderColor: disabled ? Color.Fog : checked || isHovered ? Color.ForetGreen : Color.Stone,
    borderRadius: '4px',
    backgroundColor: disabled
      ? checked
        ? Color.Fog
        : Color.White
      : checked
      ? Color.ForetGreen
      : isHovered
      ? Color.Paper
      : Color.White,
    transition: 'all 0.15s ease-in-out',
    ...(isFocused && { boxShadow: `rgba(46, 139, 87, 0.35) 0 0 0 3px` }),
  });

const checkMarkStyles = (checked: boolean) =>
  css({
    position: 'absolute',
    left: '4px',
    top: '6px',
    width: '14px',
    height: '6px',
    borderLeft: `2px solid ${Color.White}`,
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: `2px solid ${Color.White}`,
    transform: 'rotate(-45deg)',
    visibility: checked ? 'visible' : 'hidden',
  });

const checkboxSubtitle1Style = (disabled: boolean) =>
  css({
    ...(disabled && {
      color: Color.Fog,
      transition: 'color 0.15s ease-in-out',
    }),
  });

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  labelText,
  value,
  checked,
  disabled,
  onChange,
  ...props
}: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(!!checked);

  const handleMouseOver = () => {
    setIsHovered(!disabled && true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(!disabled && true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked, id, event);
  };

  return (
    <div css={checkboxWrapperStyles} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <input
        css={inputStyles}
        type='checkbox'
        id={id}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <label css={labelStyles(disabled)} htmlFor={id} aria-label={labelText}>
        <div css={roundSquareBoxContainerStyles}>
          <span css={roundSquareBoxStyles(isChecked, disabled, isHovered, isFocused)} />
          <span css={checkMarkStyles(isChecked)} />
        </div>
        <Subtitle1 css={checkboxSubtitle1Style(disabled)}>{labelText}</Subtitle1>
      </label>
    </div>
  );
};

export default Checkbox;
