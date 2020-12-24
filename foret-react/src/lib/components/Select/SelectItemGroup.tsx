import React, { forwardRef } from 'react';
import { SelectItemGroupProps } from './models/select-item-group.props';

const SelectItemGroup = forwardRef<HTMLOptGroupElement, SelectItemGroupProps>(
  ({ children, labelText, disabled = false }: SelectItemGroupProps, ref) => {
    return (
      <optgroup ref={ref} label={labelText} disabled={disabled}>
        {children}
      </optgroup>
    );
  }
);

export default SelectItemGroup;
