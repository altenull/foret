/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { fontWeights, resetTypography, setFontFace } from './utils/typography.utils';

const smallTextStyles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: fontWeights.light,
  fontSize: '15px',
  color: Color.Ink,
  lineHeight: 1.35,
  letterSpacing: '0.8px',
});

const SmallText: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={smallTextStyles} {...props}>
      {children}
    </div>
  );
};

export default SmallText;
