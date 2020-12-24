/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { memo, useContext } from 'react';
import { defaultTheme } from '../../theme/utils/theme.util';
import { LocaleHandlerContext, LocaleHandlerContextType } from './contexts/locale-handler.context';
import { CalendarDayOfWeekProps } from './models/calendar-day-of-week-props';

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
