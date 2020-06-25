/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';

const heading1Styles = css`
  ${resetTypography}
  ${setFontFace}
  font-style: normal;
  font-weight: ${fontWeights.light};
  font-size: 72px;
  line-height: 1.25;
  letter-spacing: -1.2px;
`;

export const Heading1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h1 css={heading1Styles} {...props}>
      {children}
    </h1>
  );
};
