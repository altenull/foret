export interface DatePickerProps {
  id: string;
  selectedDate?: Date;
  onChange: (newSelectedDate: Date, id: string) => void;
}
