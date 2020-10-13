import React from 'react';
import { StorybookTemplate } from '../storybook-util';
import Heading1 from './Heading1.tsx';
import Heading2 from './Heading2.tsx';
import Heading3 from './Heading3.tsx';
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
    <Heading1 enableMargin>Marginal Heading 1</Heading1>
    <Heading2 enableMargin>Marginal Heading 2</Heading2>
    <Heading3 enableMargin>Marginal Heading 3</Heading3>
    <Paragraph enableMargin>Marginal Paragraph</Paragraph>
    <Subtitle1>Subtitle1</Subtitle1>
    <Subtitle2>Subtitle2</Subtitle2>
    <SmallText>SmallText</SmallText>
  </StorybookTemplate>
);
