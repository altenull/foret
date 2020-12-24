/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { TableRowProps } from './models/table-row-props';

const tableRowStyles = css`
  &:hover {
    background-color: ${Color.ForetGreenLighten};
  }
`;

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ children, ...props }: TableRowProps, ref) => {
  return (
    <tr css={tableRowStyles} ref={ref} {...props}>
      {children}
    </tr>
  );
});

export default TableRow;
