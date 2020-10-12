import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { SelectItemGroupProps } from './models/select-item-group.props';

const SelectItemGroup: ForwardRefExoticComponent<SelectItemGroupProps & RefAttributes<any>> = forwardRef<
  any,
  SelectItemGroupProps
>(({ children, labelText, disabled = false }: SelectItemGroupProps, ref?: any) => {
  return (
    <optgroup ref={ref} label={labelText} disabled={disabled}>
      {children}
    </optgroup>
  );
});

export default SelectItemGroup;
