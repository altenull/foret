/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';
import { colors } from '../utils/color.utils';

const heading3Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.regular,
  fontSize: '36px',
  color: colors.ink,
  lineHeight: 1.5,
  letterSpacing: '-0.5px',
});

export const Heading3: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h3 css={heading3Styles} {...props}>
      {children}
    </h3>
  );
};
