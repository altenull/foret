/** @jsx jsx */
import { Color, FontWeight } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { resetTypography, setFontFace } from './utils/typography.utils';

const paragraphStyles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.regular,
  fontSize: '20px',
  color: Color.Ink,
  lineHeight: 1.8,
});

const Paragraph: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <p css={paragraphStyles} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
