/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';

const paragraphStyles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.regular,
  fontSize: '20px',
  lineHeight: 1.8,
});

export const Paragraph: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <p css={paragraphStyles} {...props}>
      {children}
    </p>
  );
};
