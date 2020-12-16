/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { getDate } from 'date-fns';
import { defaultTheme } from '../../theme/utils/theme.util';
import { SmallText, Subtitle1 } from '../../typography';
import { DayOfWeek } from './enums/day-of-week.enum';
import { CalendarProps } from './models/calendar-props';
import { DayCell } from './models/shared';

const calendarStyles = css({});

const dayOfWeekStyles = css({
  width: '40px',
});

const dayStyles = (isToday: boolean, isSelected: Boolean, disabled: boolean) =>
  css({
    textAlign: 'center',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    border: isToday ? `1px solid ${defaultTheme.colors.stone}` : 'none',
    backgroundColor: isSelected ? defaultTheme.colors.foretGreen : 'initial',
    '&:hover': {
      backgroundColor: defaultTheme.colors.foretGreenLighten,
    },
  });

const Calendar: React.FC<CalendarProps> = ({ daysOfMonth, onSelectDay }: CalendarProps) => {
  const dayOfWeekToKoreanMap: { [dayOfWeek: string]: string } = {
    [DayOfWeek.Sun]: '일',
    [DayOfWeek.Mon]: '월',
    [DayOfWeek.Tue]: '화',
    [DayOfWeek.Wed]: '수',
    [DayOfWeek.Thr]: '목',
    [DayOfWeek.Fri]: '금',
    [DayOfWeek.Sat]: '토',
  };

  return (
    <table css={calendarStyles}>
      <thead>
        <tr>
          {Object.keys(DayOfWeek).map((dayOfWeek: string) => (
            <th key={dayOfWeek} css={dayOfWeekStyles}>
              <Subtitle1>{dayOfWeekToKoreanMap[dayOfWeek]}</Subtitle1>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {daysOfMonth.map((daysOfWeek: DayCell[], weekIndex: number) => (
          <tr key={weekIndex}>
            {weekIndex === 0 && daysOfWeek.length < 7 && <td colSpan={7 - daysOfWeek.length} />}

            {daysOfWeek.map(({ date, isToday, isSelected, disabled }: DayCell) => (
              <td
                key={date.toISOString()}
                css={dayStyles(isToday, isSelected, disabled)}
                onClick={() => onSelectDay(date)}>
                <SmallText>{getDate(date)}</SmallText>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
