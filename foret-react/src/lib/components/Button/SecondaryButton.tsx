/** @jsx jsx */
import { Color, hexToRgb } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { ButtonProps } from './models/button-props';
import { baseButtonStyles } from './utils/button.utils';

const soilRgb = hexToRgb(Color.Soil);

const secondaryButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: Color.SoilDarken1,
  },
  '&:active': {
    backgroundColor: Color.SoilDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(${soilRgb.r}, ${soilRgb.g}, ${soilRgb.b}, 0.35) 0 0 0 3px`,
  },
  '&:disabled': {
    backgroundColor: Color.SoilLighten,
  },
});

const secondaryButtonStyles = css(baseButtonStyles, secondaryButtonEffectStyles, {
  backgroundColor: Color.Soil,
  color: Color.White,
});

const SecondaryButton: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <button css={secondaryButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;
