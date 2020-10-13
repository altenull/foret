/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { defaultTheme } from '../theme/utils/theme.util';
import { TypographyProps } from './models/typography-props';
import { getResponsiveTypographyStyles, paragraphStyles } from './utils/typography.utils';

const paragraphMarginBottomStyles = css`
  margin-bottom: 0.35em;
`;

const Paragraph: React.FC<TypographyProps> = ({
  children,
  enableMargin = false,
  enableResponsive = false,
  ...props
}: TypographyProps) => {
  return (
    <p
      css={[
        paragraphStyles,
        enableMargin && paragraphMarginBottomStyles,
        enableResponsive && getResponsiveTypographyStyles(defaultTheme.textStyles.paragraph.fontSize),
      ]}
      {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
