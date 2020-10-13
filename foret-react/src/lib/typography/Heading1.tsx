/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { defaultTheme } from '../theme/utils/theme.util';
import { TypographyProps } from './models/typography-props';
import { getResponsiveTypographyStyles, heading1Styles } from './utils/typography.utils';

const heading1MarginBottomStyles = css`
  margin-bottom: 0.35em;
`;

const Heading1: React.FC<TypographyProps> = ({
  children,
  enableMargin = false,
  enableResponsive = false,
  ...props
}: TypographyProps) => {
  return (
    <h1
      css={[
        heading1Styles,
        enableMargin && heading1MarginBottomStyles,
        enableResponsive && getResponsiveTypographyStyles(defaultTheme.textStyles.heading1.fontSize),
      ]}
      {...props}>
      {children}
    </h1>
  );
};

export default Heading1;
