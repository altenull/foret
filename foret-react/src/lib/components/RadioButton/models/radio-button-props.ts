export interface RadioButtonProps {
  id: string;
  labelText: string;
  value: string;
  checked: boolean;
  disabled: boolean;
  onChange: (id: string, newCheckedValue: string) => void;
}
