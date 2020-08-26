export interface TabProps {
  id: string;
  labelText: string;
  value: string;
  name: string;
  selected: boolean;
  onSelect: (value: string, name: string, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
