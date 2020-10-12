import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { SelectItemProps } from './models/select-item-props';

const SelectItem: ForwardRefExoticComponent<SelectItemProps & RefAttributes<any>> = forwardRef<any, SelectItemProps>(
  ({ value, labelText, hidden, disabled = false, ...props }: SelectItemProps, ref?: any) => {
    return (
      <option ref={ref} value={value} hidden={hidden} disabled={disabled} {...props}>
        {labelText}
      </option>
    );
  }
);

export default SelectItem;
