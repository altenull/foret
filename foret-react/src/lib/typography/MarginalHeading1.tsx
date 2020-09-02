/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { heading1Styles } from './utils/typography.utils';

const marginalHeading1Styles = css`
  /* margin-top: 0.67em;
  margin-bottom: 0.67em; */
  margin-bottom: 0.35em;
`;

const MarginalHeading1: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h1 css={[heading1Styles, marginalHeading1Styles]} {...props}>
      {children}
    </h1>
  );
};

export default MarginalHeading1;
