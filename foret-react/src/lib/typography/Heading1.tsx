/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { fontWeights, resetTypography, setFontFace } from './utils/typography.utils';

const heading1Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.light,
  fontSize: '72px',
  color: Color.Ink,
  lineHeight: 1.25,
  letterSpacing: '-1.2px',
});

const Heading1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h1 css={heading1Styles} {...props}>
      {children}
    </h1>
  );
};

export default Heading1;
