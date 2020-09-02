/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { TypographyProps } from './models/typography-props';
import { paragraphStyles } from './utils/typography.utils';

const marginalParagraphStyles = css`
  /* margin-top: 1em;
  margin-bottom: 1em; */
  margin-bottom: 0.35em;
`;

const Paragraph: React.FC<TypographyProps> = ({ children, ...props }: TypographyProps) => {
  return (
    <p css={[paragraphStyles, marginalParagraphStyles]} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
