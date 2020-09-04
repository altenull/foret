/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React from 'react';
import { smallTextStyles, subtitle2Styles } from '../../typography/utils/typography.utils';
import { TableCellAlign } from './enums/table-cell-align.enum';
import { TableCellType } from './enums/table-cell-type.enum';
import { TableCellProps } from './models/table-cell-props';

const thStyles = css`
  ${subtitle2Styles}
  padding: 8px 16px;
`;

const tdStyles = css`
  ${smallTextStyles}
  padding: 16px;
  border-bottom: 1px solid ${Color.Fog};
`;

const tableCellStyles = (align: TableCellAlign, type: TableCellType) => css`
  ${type === TableCellType.Th ? thStyles : type === TableCellType.Td ? tdStyles : null}
  text-align: ${align};
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  type = TableCellType.Td,
  align = TableCellAlign.Left,
  ...props
}: TableCellProps) => {
  const Component = type;

  return (
    <Component css={tableCellStyles(align, type)} {...props}>
      {children}
    </Component>
  );
};

export default TableCell;
