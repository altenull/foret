/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { getDate } from 'date-fns';
import { defaultTheme } from '../../theme/utils/theme.util';
import { CalendarDayProps } from './models/calendar-day-props';

const selectedDayStyles = css({
  backgroundColor: defaultTheme.colors.foretGreen,
  color: defaultTheme.colors.white,
});

const todayStyles = css({
  textDecoration: 'underline',
});

const disabledDayStyles = css({
  color: defaultTheme.colors.fog,
  pointerEvents: 'none',
});

const dayStyles = (isToday: boolean, isSelected: Boolean, disabled: boolean) =>
  css(
    {
      ...defaultTheme.textStyles.smallText,
      textAlign: 'center',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: isSelected ? defaultTheme.colors.foretGreen : defaultTheme.colors.foretGreenLighten,
      },
    },
    isToday && todayStyles,
    isSelected && selectedDayStyles,
    disabled && disabledDayStyles
  );

const CalendarDay: React.FC<CalendarDayProps> = ({
  day: { date, isToday, isSelected, disabled },
  onSelectDay,
}: CalendarDayProps) => {
  return (
    <td css={dayStyles(isToday, isSelected, disabled)} onClick={() => onSelectDay(date)}>
      {getDate(date)}
    </td>
  );
};

export default CalendarDay;
