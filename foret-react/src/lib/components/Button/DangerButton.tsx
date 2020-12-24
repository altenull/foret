/** @jsx jsx */
import { Color, hexToRgb } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { ButtonProps } from './models/button-props';
import { baseButtonStyles } from './utils/button.utils';

const sunRgb = hexToRgb(Color.Sun);

const dangerButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: Color.SunDarken1,
  },
  '&:active': {
    backgroundColor: Color.SunDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(${sunRgb.r}, ${sunRgb.g}, ${sunRgb.b}, 0.35) 0 0 0 3px`,
  },
  '&:disabled': {
    backgroundColor: Color.SunLighten,
  },
});

const dangerButtonStyles = css(baseButtonStyles, dangerButtonEffectStyles, {
  backgroundColor: Color.Sun,
  color: Color.White,
});

const DangerButton = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button css={dangerButtonStyles} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default DangerButton;
