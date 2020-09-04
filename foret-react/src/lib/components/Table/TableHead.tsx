/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { Color } from '@altenull/foret-core';
import { TableHeadProps } from './models/table-head-props';

const tableHeadStyles = css`
  border-bottom: 2px solid ${Color.ForetGreen};
`;

const TableHead: React.FC<TableHeadProps> = ({ children, ...props }: TableHeadProps) => {
  return (
    <thead css={tableHeadStyles} {...props}>
      {children}
    </thead>
  );
};

export default TableHead;
