/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { memo } from 'react';
import { defaultTheme } from '../../theme/utils/theme.util';
import { DayOfWeek } from './enums/day-of-week.enum';
import { CalendarDayOfWeekProps } from './models/calendar-day-of-week-props';

const dayOfWeekStyles = css({
  ...defaultTheme.textStyles.subtitle1,
  width: '40px',
  padding: 0,
});

const CalendarDayOfWeek: React.FC<CalendarDayOfWeekProps> = memo(({ dayOfWeek }: CalendarDayOfWeekProps) => {
  const dayOfWeekToKoreanMap: { [dayOfWeek: string]: string } = {
    [DayOfWeek.Sun]: '일',
    [DayOfWeek.Mon]: '월',
    [DayOfWeek.Tue]: '화',
    [DayOfWeek.Wed]: '수',
    [DayOfWeek.Thr]: '목',
    [DayOfWeek.Fri]: '금',
    [DayOfWeek.Sat]: '토',
  };

  return <th css={dayOfWeekStyles}>{dayOfWeekToKoreanMap[dayOfWeek]}</th>;
});

export default CalendarDayOfWeek;
