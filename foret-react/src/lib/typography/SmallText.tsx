/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { smallTextStyles } from './utils/typography.utils';

const SmallText: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={smallTextStyles} {...props}>
      {children}
    </div>
  );
};

export default SmallText;
