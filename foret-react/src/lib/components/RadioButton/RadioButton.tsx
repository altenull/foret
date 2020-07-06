/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Subtitle1 } from '../../typography';
import { RadioButtonProps } from './models/radio-button-props';

const radioButtonWrapperStyles = css({
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

const labelStyles = css({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const radioCircleContainerStyles = css({
  position: 'relative',
  width: '24px',
  height: '24px',
  marginRight: '16px',
});

const radioOuterCircleStyles = (checked: boolean, isHovered: boolean, isFocused: boolean) =>
  css({
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'block',
    boxSizing: 'border-box',
    width: '24px',
    height: '24px',
    border: '1px solid',
    borderColor: checked || isHovered ? Color.ForetGreen : Color.Stone,
    borderRadius: '50%',
    backgroundColor: isHovered ? Color.Paper : Color.White,
    transition: 'all 0.15s ease-in-out',
    ...(isFocused && { boxShadow: `rgba(46, 139, 87, 0.35) 0 0 0 3px` }),
  });

const radioInnerCircleStyles = (checked: boolean, isHovered: boolean) =>
  css({
    position: 'absolute',
    left: '6px',
    top: '6px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: checked ? Color.ForetGreen : isHovered ? Color.Paper : Color.White,
    transition: 'background-color 0.15s ease-in-out',
  });

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  labelText,
  value,
  name,
  checked,
  onChange,
  ...props
}: RadioButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value, name, event);
  };

  return (
    <div css={radioButtonWrapperStyles} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <input
        css={inputStyles}
        type='radio'
        id={id}
        checked={checked}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <label css={labelStyles} htmlFor={id} aria-label={labelText}>
        <div css={radioCircleContainerStyles}>
          <span css={radioOuterCircleStyles(checked, isHovered, isFocused)} />
          <span css={radioInnerCircleStyles(checked, isHovered)} />
        </div>
        <Subtitle1>{labelText}</Subtitle1>
      </label>
    </div>
  );
};

export default RadioButton;
