import React from 'react';
import { IconProps } from './models/icon-props';
import { Color } from '@altenull/foret-core';

const ChevronDownIcon: React.FC<IconProps> = ({ size = 16, ...props }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={Color.Stone}
      viewBox='0 0 284.9 284.9'
      {...props}>
      <path d='M282.1 195.3L149 62.2c-1.9-1.9-4.1-2.9-6.6-2.9s-4.7 1-6.6 2.9L2.9 195.3C1 197.2 0 199.4 0 201.9c0 2.5 1 4.7 2.9 6.6l14.3 14.3c1.9 1.9 4.1 2.9 6.6 2.9 2.5 0 4.7-1 6.6-2.9l112.2-112.2 112.2 112.2c1.9 1.9 4.1 2.8 6.6 2.8 2.5 0 4.7-1 6.6-2.8l14.3-14.3c1.9-1.9 2.8-4.1 2.8-6.6C284.9 199.4 284 197.2 282.1 195.3z' />
    </svg>
  );
};

export default ChevronDownIcon;
