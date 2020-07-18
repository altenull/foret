/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const storybookSpacingStyles = css({
  display: 'block',
  height: '32px',
});

const StorybookSpacing: React.FC = ({ children }: { children: React.ReactNode }) => {
  return <div css={storybookSpacingStyles}>{children}</div>;
};

export default StorybookSpacing;
