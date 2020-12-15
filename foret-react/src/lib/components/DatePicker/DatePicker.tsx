/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { forwardRef, ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { defaultTheme } from '../../theme/utils/theme.util';
import { Paragraph } from '../../typography';
import Calendar from './Calendar';
import { DatePickerProps } from './models/date-picker-props';

const datePickerStyles = css({
  display: 'inline-block',
  backgroundColor: defaultTheme.colors.white,
});

const DatePicker: ForwardRefExoticComponent<DatePickerProps & RefAttributes<any>> = forwardRef<any, DatePickerProps>(
  ({ selectedDate, ...props }: DatePickerProps, ref?: any) => {
    const [baseDate, setBaseDate] = useState<Date>(selectedDate != null ? selectedDate : new Date());

    return (
      <div css={datePickerStyles} ref={ref} {...props}>
        <Paragraph>
          {baseDate.getFullYear()}년 {baseDate.getMonth() + 1}월
        </Paragraph>
        <Calendar />
      </div>
    );
  }
);

export default DatePicker;
