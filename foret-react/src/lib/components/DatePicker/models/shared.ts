import { LocaleHandler } from '../utils/locale-handler.utils';

export interface DayCell {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
  disabled: boolean;
}

export interface LocaleHandlerContextType {
  localeHandler: LocaleHandler;
}
