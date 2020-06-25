import React from 'react';
import { Heading1 } from './Heading1.tsx';
import { Heading2 } from './Heading2.tsx';

export default {
  title: 'Typography',
};

export const withHeading1 = () => <Heading1>Heading 1</Heading1>;
export const withHeading2 = () => <Heading2>Heading 2</Heading2>;
