import { DayCell } from './shared';

export interface CalendarProps {
  daysOfMonth: DayCell[][];
  onSelectDay: (newSelectedDay: Date) => void;
}
