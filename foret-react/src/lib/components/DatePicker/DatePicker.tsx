/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { add, startOfMonth, sub } from 'date-fns';
import { forwardRef, ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { defaultTheme } from '../../theme/utils/theme.util';
import { Paragraph } from '../../typography';
import Calendar from './Calendar';
import { MonthNavigatorType } from './enums/month-navigator-type.enum';
import { DatePickerProps } from './models/date-picker-props';
import MonthNavigator from './MonthNavigator';
import { getDaysOfMonth } from './utils/date-picker.utils';

const datePickerStyles = css({
  display: 'inline-block',
  backgroundColor: defaultTheme.colors.white,
  padding: '12px',
});

const navigationStyles = css({
  display: 'flex',
  marginBottom: '12px',
});

const titleStyles = css({
  width: '100%',
  paddingLeft: '12px',
});

const DatePicker: ForwardRefExoticComponent<DatePickerProps & RefAttributes<any>> = forwardRef<any, DatePickerProps>(
  ({ id, selectedDate, onChange = () => {}, ...props }: DatePickerProps, ref?: any) => {
    // baseDate is always a date which is first day of month.
    const [baseDate, setBaseDate] = useState<Date>(startOfMonth(selectedDate != null ? selectedDate : new Date()));
    const [selectedDay, setSelectedDay] = useState<Date | null>(selectedDate != null ? selectedDate : null);

    const navigateToPrevMonth = (date: Date): void => {
      setBaseDate(sub(date, { months: 1 }));
    };

    const navigateToNextMonth = (date: Date): void => {
      setBaseDate(add(date, { months: 1 }));
    };

    const handleSelectDay = (newSelectedDay: Date): void => {
      onChange(newSelectedDay, id);
      setSelectedDay(newSelectedDay);
    };

    return (
      <div id={id} css={datePickerStyles} ref={ref} {...props}>
        <div css={navigationStyles}>
          <Paragraph css={titleStyles}>
            {baseDate.getFullYear()}년 {baseDate.getMonth() + 1}월
          </Paragraph>
          <MonthNavigator type={MonthNavigatorType.Prev} onNavigateMonth={() => navigateToPrevMonth(baseDate)} />
          <MonthNavigator type={MonthNavigatorType.Next} onNavigateMonth={() => navigateToNextMonth(baseDate)} />
        </div>

        <Calendar daysOfMonth={getDaysOfMonth(baseDate, selectedDay)} onSelectDay={handleSelectDay} />
      </div>
    );
  }
);

export default DatePicker;
