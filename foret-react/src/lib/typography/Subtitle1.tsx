/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Color } from '../enums/color.enum';
import { TypographyProps } from './models/typography-props';
import { fontWeights, resetTypography, setFontFace } from './utils/typography.utils';

const heading1Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.light,
  fontSize: '18px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '0.5px',
});

const Subtitl1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={heading1Styles} {...props}>
      {children}
    </div>
  );
};

export default Subtitl1;
