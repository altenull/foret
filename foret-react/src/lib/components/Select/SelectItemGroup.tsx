import React from 'react';
import { SelectItemGroupProps } from './models/select-item-group.props';

const SelectItemGroup: React.FC<SelectItemGroupProps> = ({ children, label, disabled }: SelectItemGroupProps) => {
  return (
    <optgroup label={label} disabled={disabled}>
      {children}
    </optgroup>
  );
};

export default SelectItemGroup;
