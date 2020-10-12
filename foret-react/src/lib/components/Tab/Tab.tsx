/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { SmallText, Subtitle2 } from '../../typography';
import { TabProps } from './models/tab-props';

const tabStyles = (selected: boolean) => css`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 24px;
  box-sizing: border-box;
  cursor: pointer;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${selected ? Color.ForetGreen : 'transparent'};
  transition: border-bottom-color 0.15s ease-in-out;
  &:hover {
    border-bottom-color: ${selected ? Color.ForetGreen : Color.Fog};
  }
`;

const Tab: ForwardRefExoticComponent<TabProps & RefAttributes<any>> = forwardRef<any, TabProps>(
  ({ id, labelText, value, selected, onChange, ...props }: TabProps, ref?: any) => {
    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      onChange(id, value);
    };

    return (
      <li css={tabStyles(selected)} ref={ref} onClick={handleClick} {...props}>
        {selected ? <Subtitle2>{labelText}</Subtitle2> : <SmallText>{labelText}</SmallText>}
      </li>
    );
  }
);

export default Tab;
