import { Color } from '@altenull/foret-core';
import React from 'react';
import { IconProps } from './models/icon-props';

const ChevronLeftIcon: React.FC<IconProps> = ({ size = 16, ...props }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={Color.Stone}
      viewBox='0 0 240.8 240.8'
      {...props}>
      <path d='M57.6 129L165.9 237.3c4.8 4.7 12.5 4.7 17.2 0 4.8-4.7 4.8-12.4 0-17.2l-99.7-99.7 99.7-99.7c4.8-4.7 4.8-12.4 0-17.2 -4.8-4.7-12.5-4.7-17.2 0L57.6 111.8C52.9 116.5 52.9 124.3 57.6 129z' />
    </svg>
  );
};

export default ChevronLeftIcon;
