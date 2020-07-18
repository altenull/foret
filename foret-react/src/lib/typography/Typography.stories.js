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

export const withHeading1 = () => (
  <StorybookTemplate>
    <Heading1>Heading 1</Heading1>
  </StorybookTemplate>
);

export const withHeading2 = () => (
  <StorybookTemplate>
    <Heading2>Heading 2</Heading2>
  </StorybookTemplate>
);

export const withHeading3 = () => (
  <StorybookTemplate>
    <Heading3>Heading 3</Heading3>
  </StorybookTemplate>
);

export const withParagraph = () => (
  <StorybookTemplate>
    <Paragraph>Paragraph</Paragraph>
  </StorybookTemplate>
);

export const withSubtitle1 = () => (
  <StorybookTemplate>
    <Subtitle1>Subtitle1</Subtitle1>
  </StorybookTemplate>
);

export const withSubtitle2 = () => (
  <StorybookTemplate>
    <Subtitle2>Subtitle2</Subtitle2>
  </StorybookTemplate>
);

export const withSmallText = () => (
  <StorybookTemplate>
    <SmallText>SmallText</SmallText>
  </StorybookTemplate>
);
