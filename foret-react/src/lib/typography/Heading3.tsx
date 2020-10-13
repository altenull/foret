/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { defaultTheme } from '../theme/utils/theme.util';
import { TypographyProps } from './models/typography-props';
import { getResponsiveTypographyStyles, heading3Styles } from './utils/typography.utils';

const heading3MarginBottomStyles = css`
  margin-bottom: 0.35em;
`;

const Heading3: React.FC<TypographyProps> = ({
  children,
  enableMargin = false,
  enableResponsive = false,
  ...props
}: TypographyProps) => {
  return (
    <h3
      css={[
        heading3Styles,
        enableMargin && heading3MarginBottomStyles,
        enableResponsive && getResponsiveTypographyStyles(defaultTheme.textStyles.heading3.fontSize),
      ]}
      {...props}>
      {children}
    </h3>
  );
};

export default Heading3;
