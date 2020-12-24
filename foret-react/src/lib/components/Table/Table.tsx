/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { TableProps } from './models/table-props';

const tableStyles = css`
  border-collapse: collapse;
  width: 100%;
`;

const Table = forwardRef<HTMLTableElement, TableProps>(({ children, ...props }: TableProps, ref) => {
  return (
    <table css={tableStyles} ref={ref} {...props}>
      {children}
    </table>
  );
});

export default Table;
