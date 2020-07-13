export interface CheckboxProps {
  id: string;
  labelText: string;
  value: string;
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
