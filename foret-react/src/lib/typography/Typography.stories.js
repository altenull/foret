import React from 'react';
import { StorybookTemplate } from '../storybook-util';
import Heading1 from './Heading1.tsx';
import Heading2 from './Heading2.tsx';
import Heading3 from './Heading3.tsx';
import MarginalHeading1 from './MarginalHeading1.tsx';
import MarginalHeading2 from './MarginalHeading2.tsx';
import MarginalHeading3 from './MarginalHeading3.tsx';
import MarginalParagraph from './MarginalParagraph.tsx';
import Paragraph from './Paragraph.tsx';
import SmallText from './SmallText.tsx';
import Subtitle1 from './Subtitle1.tsx';
import Subtitle2 from './Subtitle2.tsx';

export default {
  title: 'components/Typography',
};

export const withTypography = () => (
  <StorybookTemplate>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Paragraph>Paragraph</Paragraph>
    <Subtitle1>Subtitle1</Subtitle1>
    <Subtitle2>Subtitle2</Subtitle2>
    <SmallText>SmallText</SmallText>
  </StorybookTemplate>
);

export const withMarginalTypography = () => (
  <StorybookTemplate>
    <MarginalHeading1>Marginal Heading 1</MarginalHeading1>
    <MarginalHeading2>Marginal Heading 2</MarginalHeading2>
    <MarginalHeading3>Marginal Heading 3</MarginalHeading3>
    <MarginalParagraph>Marginal Paragraph</MarginalParagraph>
    <Subtitle1>Subtitle1</Subtitle1>
    <Subtitle2>Subtitle2</Subtitle2>
    <SmallText>SmallText</SmallText>
  </StorybookTemplate>
);
