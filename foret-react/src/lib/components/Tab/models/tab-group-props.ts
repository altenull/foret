export interface TabGroupProps {
  children: React.ReactNode;
  selectedValue: string;
  onChange: (id: string, newSelectedValue: string) => void;
}
