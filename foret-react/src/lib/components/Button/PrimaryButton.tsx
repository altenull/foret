/** @jsx jsx */
import { Color, hexToRgb } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { ButtonProps } from './models/button-props';
import { baseButtonStyles } from './utils/button.utils';

const foretGreenRgb = hexToRgb(Color.ForetGreen);

const primaryButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: Color.ForetGreenDarken1,
  },
  '&:active': {
    backgroundColor: Color.ForetGreenDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(${foretGreenRgb.r}, ${foretGreenRgb.g}, ${foretGreenRgb.b}, 0.35) 0 0 0 3px`,
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
