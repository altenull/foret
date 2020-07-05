import React from 'react';
import Heading1 from './Heading1.tsx';
import Heading2 from './Heading2.tsx';
import Heading3 from './Heading3.tsx';
import Paragraph from './Paragraph.tsx';
import Subtitle1 from './Subtitle1.tsx';
import Subtitle2 from './Subtitle2.tsx';
import SmallText from './SmallText.tsx';

export default {
  title: 'Typography',
};

export const withHeading1 = () => <Heading1>Heading 1</Heading1>;

export const withHeading2 = () => <Heading2>Heading 2</Heading2>;

export const withHeading3 = () => <Heading3>Heading 3</Heading3>;

export const withParagraph = () => <Paragraph>Paragraph</Paragraph>;

export const withSubtitle1 = () => <Subtitle1>Subtitle1</Subtitle1>;

export const withSubtitle2 = () => <Subtitle2>Subtitle2</Subtitle2>;

export const withSmallText = () => <SmallText>SmallText</SmallText>;
