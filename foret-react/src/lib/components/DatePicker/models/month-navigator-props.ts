import { MonthNavigatorType } from '../enums/month-navigator-type.enum';

export interface MonthNavigatorProps {
  type: MonthNavigatorType;
  onNavigateMonth: () => void;
}
