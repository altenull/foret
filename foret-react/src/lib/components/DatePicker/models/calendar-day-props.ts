import { DayCell } from './shared';

export interface CalendarDayProps {
  day: DayCell;
  onSelectDay: (date: Date) => void;
}
