/** @jsx jsx */
import { Color, hexToRgb } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { ButtonProps } from './models/button-props';
import { baseButtonStyles } from './utils/button.utils';

const dangerRgb = hexToRgb(Color.Danger);

const dangerButtonEffectStyles = css({
  '&:hover': {
    backgroundColor: Color.DangerDarken1,
  },
  '&:active': {
    backgroundColor: Color.DangerDarken2,
  },
  '&:focus': {
    boxShadow: `rgba(${dangerRgb.r}, ${dangerRgb.g}, ${dangerRgb.b}, 0.35) 0 0 0 3px`,
  },
  '&:disabled': {
    backgroundColor: Color.DangerLighten,
  },
});

const dangerButtonStyles = css(baseButtonStyles, dangerButtonEffectStyles, {
  backgroundColor: Color.Danger,
  color: Color.White,
});

const DangerButton: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <button css={dangerButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default DangerButton;
