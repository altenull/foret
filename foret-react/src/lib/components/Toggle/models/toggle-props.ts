export interface ToggleProps {
  id: string;
  checked: boolean;
  disabled: boolean;
  onToggle: (id: string, newChecked: boolean) => void;
}
