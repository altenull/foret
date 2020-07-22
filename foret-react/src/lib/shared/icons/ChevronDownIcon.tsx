import { Color } from '@altenull/foret-core';
import React from 'react';
import { IconProps } from './models/icon-props';

const ChevronDownIcon: React.FC<IconProps> = ({ size = 16, color = Color.Stone, ...props }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 284.9 284.9'
      {...props}>
      <path d='M282.1 76.5l-14.3-14.3c-1.9-1.9-4.1-2.9-6.6-2.9 -2.5 0-4.7 1-6.6 2.9L142.5 174.4 30.3 62.2c-1.9-1.9-4.1-2.9-6.6-2.9 -2.5 0-4.7 1-6.6 2.9L2.9 76.5C1 78.4 0 80.6 0 83.1c0 2.5 1 4.7 2.9 6.6l133 133c1.9 1.9 4.1 2.9 6.6 2.9s4.7-1 6.6-2.9L282.1 89.6c1.9-1.9 2.8-4.1 2.8-6.6C284.9 80.6 284 78.4 282.1 76.5z' />
    </svg>
  );
};

export default ChevronDownIcon;
