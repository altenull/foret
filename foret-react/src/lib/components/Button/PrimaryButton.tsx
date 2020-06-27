/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../utils/color.utils';
import { baseButtonStyles } from './utils/button.utils';
import { ButtonProps } from './models/button-props';

const primaryButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: colors.foretGreenDarken1,
  },
  '&:active': {
    backgroundColor: colors.foretGreenDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(46, 139, 87, 0.35) 0 0 0 3px`,
  },
  '&:disabled': {
    backgroundColor: colors.foretGreenLighten,
  },
});

const primaryButtonStyles = css(baseButtonStyles, primaryButtonEffectStyles, {
  backgroundColor: colors.foretGreen,
  color: colors.white,
});

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <button css={primaryButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
