/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';

const heading1Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.light,
  fontSize: '72px',
  lineHeight: 1.25,
  letterSpacing: '-1.2px',
});

export const Heading1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h1 css={heading1Styles} {...props}>
      {children}
    </h1>
  );
};
