export interface TabGroupProps {
  children: React.ReactNode;
  selectedValue: string;
  name: string;
  onSelect: (newSelection: string, name: string, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
