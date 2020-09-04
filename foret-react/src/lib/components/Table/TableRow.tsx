/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React from 'react';
import { TableRowProps } from './models/table-row-props';

const tableRowStyles = css`
  &:hover {
    background-color: ${Color.ForetGreenLighten};
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children, ...props }: TableRowProps) => {
  return (
    <tr css={tableRowStyles} {...props}>
      {children}
    </tr>
  );
};

export default TableRow;
