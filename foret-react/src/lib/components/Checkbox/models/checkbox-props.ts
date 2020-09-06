export interface CheckboxProps {
  id: string;
  labelText: string;
  checked: boolean;
  disabled: boolean;
  onChange: (id: string, newChecked: boolean) => void;
}
