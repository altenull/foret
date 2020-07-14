export interface ToggleProps {
  id: string;
  toggled: boolean;
  disabled: boolean;
  onToggle: (newToggled: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
