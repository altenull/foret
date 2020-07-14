/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import { hiddenInputStyles, inputWrapperStyles, labelStyles } from '../../shared/styles/input.styles';
import { ToggleProps } from './models/toggle-props';
import { Color } from '@altenull/foret-core';

const toggleSwitchContainerStyles = css({
  position: 'relative',
  width: '48px',
  height: '24px',
});

const switchWrapperStyles = (toggled: boolean, disabled: boolean, isFocused: boolean) =>
  css({
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'block',
    boxSizing: 'border-box',
    width: '48px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: disabled ? Color.Fog : toggled ? Color.ForetGreen : Color.Stone,
    transition: 'all 0.15s ease-in-out',
    ...(isFocused && { boxShadow: `rgba(46, 139, 87, 0.35) 0 0 0 3px` }),
  });

const switchStyles = (toggled: boolean) =>
  css({
    position: 'absolute',
    left: '2px',
    top: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: Color.White,
    transform: `translateX(${toggled ? '24px' : '0'})`,
    transition: 'transform 0.15s ease-in-out',
  });

const Toggle: React.FC<ToggleProps> = ({ id, toggled, disabled, onToggle, ...props }: ToggleProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isToggled, setIsToggled] = useState(!!toggled);

  const handleFocus = () => {
    setIsFocused(!disabled && true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggled(event.target.checked);
    onToggle(event.target.checked, id, event);
  };

  return (
    <div css={inputWrapperStyles}>
      <input
        css={hiddenInputStyles}
        type='checkbox'
        id={id}
        checked={isToggled}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <label css={labelStyles(disabled)} htmlFor={id}>
        <div css={toggleSwitchContainerStyles}>
          <span css={switchWrapperStyles(isToggled, disabled, isFocused)} />
          <span css={switchStyles(isToggled)} />
        </div>
      </label>
    </div>
  );
};

export default Toggle;
