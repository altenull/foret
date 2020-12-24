/** @jsx jsx */
import { Color, hexToRgb } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { ButtonProps } from './models/button-props';
import { baseButtonStyles } from './utils/button.utils';

const stoneRgb = hexToRgb(Color.Stone);

const secondaryButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: Color.StoneDarken1,
  },
  '&:active': {
    backgroundColor: Color.StoneDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(${stoneRgb.r}, ${stoneRgb.g}, ${stoneRgb.b}, 0.35) 0 0 0 3px`,
  },
  '&:disabled': {
    backgroundColor: Color.StoneLighten,
  },
});

const secondaryButtonStyles = css(baseButtonStyles, secondaryButtonEffectStyles, {
  backgroundColor: Color.Stone,
  color: Color.White,
});

const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }: ButtonProps, ref) => {
  return (
    <button css={secondaryButtonStyles} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default SecondaryButton;
