/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { heading2Styles } from './utils/typography.utils';

const Heading2: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h2 css={heading2Styles} {...props}>
      {children}
    </h2>
  );
};

export default Heading2;
