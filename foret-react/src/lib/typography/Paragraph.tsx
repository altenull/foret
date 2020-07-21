/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { paragraphStyles } from './utils/typography.utils';

const Paragraph: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <p css={paragraphStyles} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
