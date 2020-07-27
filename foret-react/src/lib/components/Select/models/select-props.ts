export interface SelectProps {
  children: React.ReactNode;
  id: string;
  name: string;
  legendText?: string;
  selectedValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (newValue: string, id: string, name: string) => void;
}
