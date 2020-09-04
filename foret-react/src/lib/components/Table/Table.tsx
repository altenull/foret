/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { TableProps } from './models/table-props';

const tableStyles = css`
  border-collapse: collapse;
  width: 100%;
`;

const Table: React.FC<TableProps> = ({ children, ...props }: TableProps) => {
  return (
    <table css={tableStyles} {...props}>
      {children}
    </table>
  );
};

export default Table;
