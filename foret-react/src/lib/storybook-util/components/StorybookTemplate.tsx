/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const storybookTemplateStyles = css({
  display: 'block',
  margin: '64px 32px',
});

const StorybookTemplate: React.FC = ({ children }: { children: React.ReactNode }) => {
  return <div css={storybookTemplateStyles}>{children}</div>;
};

export default StorybookTemplate;
