/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React from 'react';
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

const Tab: React.FC<TabProps> = ({ labelText, value, name, selected = false, onSelect, ...props }: TabProps) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    onSelect(value, name, event);
  };

  return (
    <li css={tabStyles(selected)} onClick={handleClick} {...props}>
      {selected ? <Subtitle2>{labelText}</Subtitle2> : <SmallText>{labelText}</SmallText>}
    </li>
  );
};

export default Tab;
