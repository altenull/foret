import { add, getDay, getDaysInMonth, isSameDay, isToday } from 'date-fns';
import { DayOfWeek } from '../enums/day-of-week.enum';
import { DayCell } from '../models/shared';

export const getDaysOfMonth = (baseDate: Date, selectedDate?: Date): DayCell[][] => {
  const daysInMonth: number = getDaysInMonth(baseDate);
  const firstDayOfWeek: number = getDay(baseDate);

  let daysOfMonth: DayCell[][] = [[]];

  for (let dayCounter = 0, weekdayCounter = firstDayOfWeek; dayCounter < daysInMonth; dayCounter++, weekdayCounter++) {
    if (weekdayCounter > DayOfWeek.Sat) {
      weekdayCounter = DayOfWeek.Sun;
      daysOfMonth.push([]);
    }

    const date: Date = add(baseDate, { days: dayCounter });
    const dayCell: DayCell = {
      date,
      isToday: isToday(date),
      isSelected: selectedDate != null ? isSameDay(date, selectedDate) : false,
      disabled: false,
    };

    daysOfMonth[daysOfMonth.length - 1].push(dayCell);
  }

  return daysOfMonth;
};
