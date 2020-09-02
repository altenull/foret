/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { heading2Styles } from './utils/typography.utils';

const marginalHeading2Styles = css`
  /* margin-top: 0.83em;
  margin-bottom: 0.83em; */
  margin-bottom: 0.35em;
`;

const MarginalHeading2: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h2 css={[heading2Styles, marginalHeading2Styles]} {...props}>
      {children}
    </h2>
  );
};

export default MarginalHeading2;
