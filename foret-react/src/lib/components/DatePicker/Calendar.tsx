/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import CalendarDay from './CalendarDay';
import CalendarDayOfWeek from './CalendarDayOfWeek';
import { DayOfWeek } from './enums/day-of-week.enum';
import { CalendarProps } from './models/calendar-props';
import { DayCell } from './models/shared';

const calendarStyles = css({
  borderSpacing: 'initial',
  fontFamily: 'Overpass, IBMPlexSansKR, sans-serif',
});

const Calendar: React.FC<CalendarProps> = ({ daysOfMonth, onSelectDay }: CalendarProps) => {
  const shouldFillBlankCell = (weekIndex: number, daysOfWeekLength: number): boolean => {
    const isFirstWeekOfMonth: boolean = weekIndex === 0;

    return isFirstWeekOfMonth && daysOfWeekLength < 7;
  };

  return (
    <table css={calendarStyles}>
      <thead>
        <tr>
          {Object.keys(DayOfWeek)
            .filter((dayOfWeek: string) => !isNaN(Number(dayOfWeek)))
            .map((dayOfWeek: string) => (
              <CalendarDayOfWeek key={dayOfWeek} dayOfWeek={+dayOfWeek} />
            ))}
        </tr>
      </thead>
      <tbody>
        {daysOfMonth.map((daysOfWeek: DayCell[], weekIndex: number) => (
          <tr key={weekIndex}>
            {shouldFillBlankCell(weekIndex, daysOfWeek.length) && <td colSpan={7 - daysOfWeek.length} />}

            {daysOfWeek.map((day: DayCell) => (
              <CalendarDay key={day.date.toISOString()} day={day} onSelectDay={onSelectDay} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
