export interface CheckboxGroupProps {
  children: React.ReactNode;
  legendText: string;
  disabled: boolean;
  onChange: (newChecked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
