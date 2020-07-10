export interface RadioButtonGroupProps {
  children: React.ReactNode;
  legendText: string;
  selectedValue: string;
  name: string;
  disabled: boolean;
  onChange: (newSelection: string, name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
