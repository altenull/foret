/** @jsx jsx */
import { Color, hexToRgb } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { forwardRef, useState } from 'react';
import { hiddenInputStyles, inputWrapperStyles, labelStyles } from '../../shared/styles/input.styles';
import { ToggleProps } from './models/toggle-props';

const foretGreenRgb = hexToRgb(Color.ForetGreen);

const toggleSwitchContainerStyles = css({
  position: 'relative',
  width: '48px',
  height: '24px',
});

const switchWrapperStyles = (checked: boolean, disabled: boolean, isFocused: boolean) =>
  css({
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'block',
    boxSizing: 'border-box',
    width: '48px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: disabled ? Color.Fog : checked ? Color.ForetGreen : Color.Stone,
    transition: 'all 0.15s ease-in-out',
    ...(isFocused && { boxShadow: `rgba(${foretGreenRgb.r}, ${foretGreenRgb.g}, ${foretGreenRgb.b}, 0.35) 0 0 0 3px` }),
  });

const switchStyles = (checked: boolean) =>
  css({
    position: 'absolute',
    left: '2px',
    top: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: Color.White,
    transform: `translateX(${checked ? '24px' : '0'})`,
    transition: 'transform 0.15s ease-in-out',
  });

const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  ({ id, checked = false, disabled = false, onToggle = () => {}, ...props }: ToggleProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(!!checked);

    const handleFocus = () => {
      setIsFocused(!disabled && true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      onToggle(id, event.target.checked);
    };

    return (
      <div css={inputWrapperStyles} ref={ref}>
        <input
          css={hiddenInputStyles}
          type='checkbox'
          id={id}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        <label css={labelStyles(disabled)} htmlFor={id}>
          <div css={toggleSwitchContainerStyles}>
            <span css={switchWrapperStyles(isChecked, disabled, isFocused)} />
            <span css={switchStyles(isChecked)} />
          </div>
        </label>
      </div>
    );
  }
);

export default Toggle;
