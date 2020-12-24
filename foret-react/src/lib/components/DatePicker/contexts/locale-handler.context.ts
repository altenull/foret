import { createContext } from 'react';
import { LocaleHandler } from '../utils/locale-handler.utils';

export interface LocaleHandlerContextType {
  localeHandler: LocaleHandler;
}

export const LocaleHandlerContext = createContext<LocaleHandlerContextType | null>(null);
