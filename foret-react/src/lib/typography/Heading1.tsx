/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { heading1Styles } from './utils/typography.utils';

const Heading1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h1 css={heading1Styles} {...props}>
      {children}
    </h1>
  );
};

export default Heading1;
