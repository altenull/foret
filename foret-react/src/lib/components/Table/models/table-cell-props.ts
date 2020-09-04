import { TableCellAlign } from '../enums/table-cell-align.enum';
import { TableCellType } from '../enums/table-cell-type.enum';

export interface TableCellProps {
  children: React.ReactNode;
  type: TableCellType;
  align: TableCellAlign;
}
