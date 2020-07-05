import { RadioButtonProps } from './radio-button-props';

export interface RadioButtonGroupProps {
  children: React.ReactNode;
  legendText: string;
  selectedValue: string;
  name: string;
  onChange: (newSelection: string, name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
