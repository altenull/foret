import React from 'react';
import { SelectItemGroupProps } from './models/select-item-group.props';

const SelectItemGroup: React.FC<SelectItemGroupProps> = ({
  children,
  labelText,
  disabled = false,
}: SelectItemGroupProps) => {
  return (
    <optgroup label={labelText} disabled={disabled}>
      {children}
    </optgroup>
  );
};

export default SelectItemGroup;
