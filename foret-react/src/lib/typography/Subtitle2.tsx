/** @jsx jsx */
import { Color, FontWeight } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { resetTypography, setFontFace } from './utils/typography.utils';

const subtitle2Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.semiBold,
  fontSize: '16px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '0.25px',
});

const Subtitle2: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={subtitle2Styles} {...props}>
      {children}
    </div>
  );
};

export default Subtitle2;
