/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { TableBodyProps } from './models/table-body-props';

const TableBody: React.FC<TableBodyProps> = ({ children, ...props }: TableBodyProps) => {
  return <tbody {...props}>{children}</tbody>;
};

export default TableBody;
