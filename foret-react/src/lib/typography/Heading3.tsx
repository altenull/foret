/** @jsx jsx */
import { Color, FontWeight } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { resetTypography, setFontFace } from './utils/typography.utils';

const heading3Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.regular,
  fontSize: '36px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '-0.5px',
});

const Heading3: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h3 css={heading3Styles} {...props}>
      {children}
    </h3>
  );
};

export default Heading3;
