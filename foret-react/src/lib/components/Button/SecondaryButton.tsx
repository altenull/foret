/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../utils/color.utils';
import { baseButtonStyles } from './utils/button.utils';
import { ButtonProps } from './models/button-props';

const secondaryButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: colors.soilDarken1,
  },
  '&:active': {
    backgroundColor: colors.soilDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(89, 55, 21, 0.35) 0 0 0 3px`,
  },
  '&:disabled': {
    backgroundColor: colors.soilLighten,
  },
});

const secondaryButtonStyles = css(baseButtonStyles, secondaryButtonEffectStyles, {
  backgroundColor: colors.soil,
  color: colors.white,
});

const SecondaryButton: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <button css={secondaryButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;
