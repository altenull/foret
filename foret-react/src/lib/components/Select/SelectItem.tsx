import React from 'react';
import { SelectItemProps } from './models/select-item-props';

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  labelText,
  hidden,
  disabled = false,
  ...props
}: SelectItemProps) => {
  return (
    <option value={value} hidden={hidden} disabled={disabled} {...props}>
      {labelText}
    </option>
  );
};

export default SelectItem;
