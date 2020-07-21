/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { heading3Styles } from './utils/typography.utils';

const Heading3: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h3 css={heading3Styles} {...props}>
      {children}
    </h3>
  );
};

export default Heading3;
