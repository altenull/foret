/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';

const heading2Styles = css`
  ${resetTypography}
  ${setFontFace}
  font-style: normal;
  font-weight: ${fontWeights.semiBold};
  font-size: 48px;
  line-height: 1.375;
  letter-spacing: -0.25px;
`;

export const Heading2: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h2 css={heading2Styles} {...props}>
      {children}
    </h2>
  );
};
