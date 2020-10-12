/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { TableProps } from './models/table-props';

const tableStyles = css`
  border-collapse: collapse;
  width: 100%;
`;

const Table: ForwardRefExoticComponent<TableProps & RefAttributes<any>> = forwardRef<any, TableProps>(
  ({ children, ...props }: TableProps, ref?: any) => {
    return (
      <table css={tableStyles} ref={ref} {...props}>
        {children}
      </table>
    );
  }
);

export default Table;
