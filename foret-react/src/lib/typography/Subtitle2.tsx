/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { subtitle2Styles } from './utils/typography.utils';

const Subtitle2: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <div css={subtitle2Styles} {...props}>
      {children}
    </div>
  );
};

export default Subtitle2;
