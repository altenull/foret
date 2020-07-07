/** @jsx jsx */
import { Color, FontWeight } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { resetTypography, setFontFace } from './utils/typography.utils';

const smallTextStyles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.light,
  fontSize: '15px',
  color: Color.Ink,
  lineHeight: 1.35,
  letterSpacing: '0.8px',
});

const SmallText: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={smallTextStyles} {...props}>
      {children}
    </div>
  );
};

export default SmallText;
