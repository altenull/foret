/** @jsx jsx */
import { LanguageCode } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import { add, startOfMonth, sub } from 'date-fns';
import { forwardRef, useState } from 'react';
import { defaultTheme } from '../../theme/utils/theme.util';
import { Paragraph } from '../../typography';
import Calendar from './Calendar';
import { LocaleHandlerContext } from './contexts/locale-handler.context';
import { MonthNavigatorType } from './enums/month-navigator-type.enum';
import { DatePickerProps } from './models/date-picker-props';
import MonthNavigator from './MonthNavigator';
import { getDaysOfMonth } from './utils/date-picker.utils';
import { getLocaleHandler, LocaleHandler } from './utils/locale-handler.utils';

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

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ id, selectedDate, locale = LanguageCode.EN, onChange = () => {}, ...props }: DatePickerProps, ref) => {
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

    const localeHandler: LocaleHandler = getLocaleHandler(locale as LanguageCode);

    return (
      <LocaleHandlerContext.Provider value={{ localeHandler }}>
        <div id={id} css={datePickerStyles} ref={ref} {...props}>
          <div css={navigationStyles}>
            <Paragraph css={titleStyles}>
              {localeHandler.yearMonthFormatter(baseDate.getFullYear(), baseDate.getMonth())}
            </Paragraph>
            <MonthNavigator type={MonthNavigatorType.Prev} onNavigateMonth={() => navigateToPrevMonth(baseDate)} />
            <MonthNavigator type={MonthNavigatorType.Next} onNavigateMonth={() => navigateToNextMonth(baseDate)} />
          </div>

          <Calendar daysOfMonth={getDaysOfMonth(baseDate, selectedDay)} onSelectDay={handleSelectDay} />
        </div>
      </LocaleHandlerContext.Provider>
    );
  }
);

export default DatePicker;
