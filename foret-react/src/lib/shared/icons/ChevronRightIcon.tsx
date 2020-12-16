import { Color } from '@altenull/foret-core';
import React from 'react';
import { IconProps } from './models/icon-props';

const ChevronRightIcon: React.FC<IconProps> = ({ size = 16, ...props }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={Color.Stone}
      viewBox='0 0 240.8 240.8'
      {...props}>
      <path d='M183.2 111.8L74.9 3.6c-4.8-4.7-12.5-4.7-17.2 0 -4.8 4.7-4.8 12.4 0 17.2l99.7 99.7 -99.7 99.7c-4.8 4.7-4.8 12.4 0 17.2 4.8 4.7 12.5 4.7 17.2 0l108.3-108.3C187.9 124.3 187.9 116.5 183.2 111.8z' />
    </svg>
  );
};

export default ChevronRightIcon;
