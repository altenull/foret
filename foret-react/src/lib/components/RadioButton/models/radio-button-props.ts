export interface RadioButtonProps {
  id: string;
  labelText: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string, name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
