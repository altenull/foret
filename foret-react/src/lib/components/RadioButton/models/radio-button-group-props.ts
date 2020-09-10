export interface RadioButtonGroupProps {
  children: React.ReactNode;
  legendText: string;
  checkedValue: string;
  disabled: boolean;
  onChange: (id: string, newCheckedValue: string) => void;
}
