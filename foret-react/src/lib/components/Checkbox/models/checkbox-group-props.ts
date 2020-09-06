export interface CheckboxGroupProps {
  children: React.ReactNode;
  legendText: string;
  disabled: boolean;
  onChange: (id: string, newChecked: boolean) => void;
}
