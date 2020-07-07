/** @jsx jsx */
import { Color, FontWeight } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { resetTypography, setFontFace } from './utils/typography.utils';

const subtitle1Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.light,
  fontSize: '18px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '0.5px',
});

const Subtitle1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={subtitle1Styles} {...props}>
      {children}
    </div>
  );
};

export default Subtitle1;
