import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import { TableCellAlign } from './enums/table-cell-align.enum';
import { TableCellType } from './enums/table-cell-type.enum';
import Table from './Table';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default {
  title: 'components/Table',
};

export const withTable = () => {
  return (
    <StorybookTemplate>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell type={TableCellType.Th}>Country</TableCell>
            <TableCell type={TableCellType.Th} align={TableCellAlign.Right}>
              Population
            </TableCell>
            <TableCell type={TableCellType.Th}>Zip code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Korea</TableCell>
            <TableCell align={TableCellAlign.Right}>8,169,200</TableCell>
            <TableCell>92735-8273</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Germany</TableCell>
            <TableCell align={TableCellAlign.Right}>11,234,000</TableCell>
            <TableCell>18233-2341</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>France</TableCell>
            <TableCell align={TableCellAlign.Right}>5,602,122</TableCell>
            <TableCell>10299-2831</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StorybookTemplate>
  );
};
