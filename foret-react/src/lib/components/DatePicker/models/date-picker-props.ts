export interface DatePickerProps {
  id: string;
  selectedDate?: Date;
  locale?: string;
  onChange: (newSelectedDate: Date, id: string) => void;
}
