/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { TableBodyProps } from './models/table-body-props';

const TableBody: ForwardRefExoticComponent<TableBodyProps & RefAttributes<any>> = forwardRef<any, TableBodyProps>(
  ({ children, ...props }: TableBodyProps, ref?: any) => {
    return (
      <tbody ref={ref} {...props}>
        {children}
      </tbody>
    );
  }
);

export default TableBody;
