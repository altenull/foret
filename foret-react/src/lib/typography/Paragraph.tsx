/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { resetTypography, fontWeights, setFontFace } from './utils/typography.utils';
import { TypographyProps } from './models/typography-props';

const paragraphStyles = css`
  ${resetTypography}
  ${setFontFace}
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 20px;
  line-height: 1.8;
`;

export const Paragraph: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <p css={paragraphStyles} {...props}>
      {children}
    </p>
  );
};
