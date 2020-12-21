/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../shared/icons';
import { defaultTheme } from '../../theme/utils/theme.util';
import { MonthNavigatorType } from './enums/month-navigator-type.enum';
import { MonthNavigatorProps } from './models/month-navigator-props';

const monthNavigatorStyles = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  outline: 'none',
  minWidth: '40px',
  height: '40px',
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: defaultTheme.colors.white,
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: defaultTheme.colors.paper,
  },
});

const MonthNavigator: FC<MonthNavigatorProps> = ({ type, onNavigateMonth }: MonthNavigatorProps) => {
  const ICON_SIZE: number = 18;

  return (
    <button css={monthNavigatorStyles} onClick={onNavigateMonth}>
      {type === MonthNavigatorType.Prev && <ChevronLeftIcon size={ICON_SIZE} />}
      {type === MonthNavigatorType.Next && <ChevronRightIcon size={ICON_SIZE} />}
    </button>
  );
};

export default MonthNavigator;
