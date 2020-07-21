/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { subtitle1Styles } from './utils/typography.utils';

const Subtitle1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={subtitle1Styles} {...props}>
      {children}
    </div>
  );
};

export default Subtitle1;
