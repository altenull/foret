/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { TableHeadProps } from './models/table-head-props';

const tableHeadStyles = css`
  border-bottom: 2px solid ${Color.ForetGreen};
`;

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, ...props }: TableHeadProps, ref) => {
  return (
    <thead css={tableHeadStyles} ref={ref} {...props}>
      {children}
    </thead>
  );
});

export default TableHead;
