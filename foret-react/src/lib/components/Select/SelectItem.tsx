import React from 'react';
import { SelectItemProps } from './models/select-item-props';

const SelectItem: React.FC<SelectItemProps> = ({ value, itemText, hidden, disabled, ...props }: SelectItemProps) => {
  return (
    <option value={value} hidden={hidden} disabled={disabled} {...props}>
      {itemText}
    </option>
  );
};

export default SelectItem;
