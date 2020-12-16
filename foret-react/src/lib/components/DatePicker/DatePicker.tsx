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
  ({ selectedDate, ...props }: DatePickerProps, ref?: any) => {
    // baseDate is always a date which is first day of month.
    const [baseDate, setBaseDate] = useState<Date>(startOfMonth(selectedDate != null ? selectedDate : new Date()));

    const navigateToNextMonth = (_baseDate: Date): void => {
      setBaseDate(add(_baseDate, { months: 1 }));
    };

    const navigateToPrevMonth = (_baseDate: Date): void => {
      setBaseDate(sub(_baseDate, { months: 1 }));
    };

    return (
      <div css={datePickerStyles} ref={ref} {...props}>
        <Paragraph>
          {baseDate.getFullYear()}년 {baseDate.getMonth() + 1}월
          <button onClick={() => navigateToPrevMonth(baseDate)}>prev</button>
          <button onClick={() => navigateToNextMonth(baseDate)}>next</button>
        </Paragraph>
        <Calendar daysOfMonth={getDaysOfMonth(baseDate, selectedDate)} />
      </div>
    );
  }
);

export default DatePicker;
