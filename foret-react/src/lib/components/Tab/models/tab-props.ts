export interface TabProps {
  id: string;
  labelText: string;
  value: string;
  selected: boolean;
  onChange: (id: string, newSelectedValue: string) => void;
}
