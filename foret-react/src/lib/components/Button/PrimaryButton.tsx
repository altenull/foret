/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { baseButtonStyles } from './utils/button.utils';
import { ButtonProps } from './models/button-props';
import { Color } from '../../enums/color.enum';

const primaryButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: Color.ForetGreenDarken1,
  },
  '&:active': {
    backgroundColor: Color.ForetGreenDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(46, 139, 87, 0.35) 0 0 0 3px`,
  },
  '&:disabled': {
    backgroundColor: Color.ForetGreenLighten,
  },
});

const primaryButtonStyles = css(baseButtonStyles, primaryButtonEffectStyles, {
  backgroundColor: Color.ForetGreen,
  color: Color.White,
});

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <button css={primaryButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
