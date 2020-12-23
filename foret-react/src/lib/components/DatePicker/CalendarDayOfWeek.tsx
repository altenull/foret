/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { memo, useContext } from 'react';
import { defaultTheme } from '../../theme/utils/theme.util';
import { LocaleHandlerContext } from './DatePicker';
import { CalendarDayOfWeekProps } from './models/calendar-day-of-week-props';
import { LocaleHandlerContextType } from './models/shared';

const dayOfWeekStyles = css({
  ...defaultTheme.textStyles.subtitle1,
  width: '40px',
  padding: 0,
});

const CalendarDayOfWeek: React.FC<CalendarDayOfWeekProps> = memo(({ dayOfWeek }: CalendarDayOfWeekProps) => {
  const { localeHandler }: LocaleHandlerContextType = useContext(LocaleHandlerContext);

  return <th css={dayOfWeekStyles}>{localeHandler.shortDays[dayOfWeek]}</th>;
});

export default CalendarDayOfWeek;
