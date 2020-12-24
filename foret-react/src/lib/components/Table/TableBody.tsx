/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { TableBodyProps } from './models/table-body-props';

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(({ children, ...props }: TableBodyProps, ref) => {
  return (
    <tbody ref={ref} {...props}>
      {children}
    </tbody>
  );
});

export default TableBody;
