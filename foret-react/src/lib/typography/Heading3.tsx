/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';

const heading3Styles = css`
  ${resetTypography}
  ${setFontFace}
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 36px;
  line-height: 1.5;
  letter-spacing: -0.5px;
`;

export const Heading3: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h3 css={heading3Styles} {...props}>
      {children}
    </h3>
  );
};
