import React, { forwardRef } from 'react';
import { SelectItemProps } from './models/select-item-props';

const SelectItem = forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ value, labelText, hidden, disabled = false, ...props }: SelectItemProps, ref) => {
    return (
      <option ref={ref} value={value} hidden={hidden} disabled={disabled} {...props}>
        {labelText}
      </option>
    );
  }
);

export default SelectItem;
