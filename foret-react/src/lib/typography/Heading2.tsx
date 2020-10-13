/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { defaultTheme } from '../theme/utils/theme.util';
import { TypographyProps } from './models/typography-props';
import { getResponsiveTypographyStyles, heading2Styles } from './utils/typography.utils';

const heading2MarginBottomStyles = css`
  margin-bottom: 0.35em;
`;

const Heading2: React.FC<TypographyProps> = ({
  children,
  enableMargin = false,
  enableResponsive = false,
  ...props
}: TypographyProps) => {
  return (
    <h2
      css={[
        heading2Styles,
        enableMargin && heading2MarginBottomStyles,
        enableResponsive && getResponsiveTypographyStyles(defaultTheme.textStyles.heading2.fontSize),
      ]}
      {...props}>
      {children}
    </h2>
  );
};

export default Heading2;
