export interface RadioButtonGroupProps {
  children: React.ReactNode;
  legendText: string;
  selectedValue: string;
  disabled: boolean;
  onChange: (id: string, newSelectedValue: string) => void;
}
