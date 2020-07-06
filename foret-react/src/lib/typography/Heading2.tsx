/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { fontWeights, resetTypography, setFontFace } from './utils/typography.utils';

const heading2Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.semiBold,
  fontSize: '48px',
  color: Color.Ink,
  lineHeight: 1.375,
  letterSpacing: '-0.25px',
});

const Heading2: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h2 css={heading2Styles} {...props}>
      {children}
    </h2>
  );
};

export default Heading2;
