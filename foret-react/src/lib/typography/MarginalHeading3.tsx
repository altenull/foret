/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { heading3Styles } from './utils/typography.utils';

const marginalHeading3Styles = css`
  /* margin-top: 1em;
  margin-bottom: 1em; */
  margin-bottom: 0.35em;
`;

const Heading3: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <h3 css={[heading3Styles, marginalHeading3Styles]} {...props}>
      {children}
    </h3>
  );
};

export default Heading3;
