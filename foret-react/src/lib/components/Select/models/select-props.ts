export interface SelectProps {
  children: React.ReactNode;
  id: string;
  legendText: string;
  selectedValue: string;
  placeholder: string;
  disabled: boolean;
  onChange: (id: string, newSelectedValue: string) => void;
}
