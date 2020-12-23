import { LanguageCode } from '@altenull/foret-core';

export interface LocaleHandler {
  yearMonthFormatter: (year: number, month: number) => string;
  months: string[];
  shortMonths: string[];
  days: string[];
  shortDays: string[];
}

const languageCodeToLocaleHandlerMap: { [P in LanguageCode]: LocaleHandler } = {
  [LanguageCode.EN]: {
    yearMonthFormatter: function (year: number, month: number) {
      return `${this.months[month]} ${year}`;
    },
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
    shortDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  },
  [LanguageCode.KO]: {
    yearMonthFormatter: function (year: number, month: number) {
      return `${year}년 ${this.months[month]}`;
    },
    months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    shortMonths: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    days: ['일', '월', '화', '수', '목', '금', '토', '일'],
    shortDays: ['일', '월', '화', '수', '목', '금', '토', '일'],
  },
};

export const getLocaleHandler = (locale: LanguageCode): LocaleHandler => languageCodeToLocaleHandlerMap[locale];
