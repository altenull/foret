/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';
import { colors } from '../utils/color.utils';

const heading2Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.semiBold,
  fontSize: '48px',
  color: colors.ink,
  lineHeight: 1.375,
  letterSpacing: '-0.25px',
});

export const Heading2: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h2 css={heading2Styles} {...props}>
      {children}
    </h2>
  );
};
