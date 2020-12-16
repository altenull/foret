/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { add, startOfMonth, sub } from 'date-fns';
import { forwardRef, ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { defaultTheme } from '../../theme/utils/theme.util';
import { Paragraph } from '../../typography';
import Calendar from './Calendar';
import { DatePickerProps } from './models/date-picker-props';
import { getDaysOfMonth } from './utils/date-picker.utils';

const datePickerStyles = css({
  display: 'inline-block',
  backgroundColor: defaultTheme.colors.white,
});

const DatePicker: ForwardRefExoticComponent<DatePickerProps & RefAttributes<any>> = forwardRef<any, DatePickerProps>(
  ({ id, selectedDate, onChange = () => {}, ...props }: DatePickerProps, ref?: any) => {
    // baseDate is always a date which is first day of month.
    const [baseDate, setBaseDate] = useState<Date>(startOfMonth(selectedDate != null ? selectedDate : new Date()));
    const [selectedDay, setSelectedDay] = useState<Date | null>(selectedDate != null ? selectedDate : null);

    const navigateToNextMonth = (date: Date): void => {
      setBaseDate(add(date, { months: 1 }));
    };

    const navigateToPrevMonth = (date: Date): void => {
      setBaseDate(sub(date, { months: 1 }));
    };

    const handleSelectDay = (newSelectedDay: Date): void => {
      onChange(newSelectedDay, id);
      setSelectedDay(newSelectedDay);
    };

    return (
      <div id={id} css={datePickerStyles} ref={ref} {...props}>
        <Paragraph>
          {baseDate.getFullYear()}년 {baseDate.getMonth() + 1}월
          <button onClick={() => navigateToPrevMonth(baseDate)}>prev</button>
          <button onClick={() => navigateToNextMonth(baseDate)}>next</button>
        </Paragraph>
        <Calendar daysOfMonth={getDaysOfMonth(baseDate, selectedDay)} onSelectDay={handleSelectDay} />
      </div>
    );
  }
);

export default DatePicker;
