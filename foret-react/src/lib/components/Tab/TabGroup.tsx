/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { TabGroupProps } from './models/tab-group-props';
import Tab from './Tab';

const tabListContainerStyles = css`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${Color.Fog};
`;

const TabGroup: React.FC<TabGroupProps> = ({ children, selectedValue, name, onSelect = () => {} }: TabGroupProps) => {
  const [selected, setSelected] = useState<string>(selectedValue);

  const handleSelect = (newSelection: string, name: string, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (newSelection !== selected) {
      setSelected(newSelection);
      onSelect(newSelection, name, event);
    }
  };

  const getTabs = () =>
    React.Children.map(children, (tab, index: number) => {
      if (React.isValidElement(tab)) {
        const { value, ...props } = tab.props;
        const isNotFirstItem: boolean = index > 0;

        return (
          <Tab
            key={value}
            css={
              isNotFirstItem &&
              css`
                margin-left: 16px;
              `
            }
            name={name}
            value={value}
            selected={value === selected}
            onSelect={handleSelect}
            {...props}
          />
        );
      } else {
        return tab;
      }
    });

  const getContent = () =>
    React.Children.map(children, (tab) =>
      React.isValidElement(tab) && tab.props.value === selected ? tab.props.children : null
    );

  return (
    <div>
      <ul css={tabListContainerStyles}>{getTabs()}</ul>
      <div>{getContent()}</div>
    </div>
  );
};

export default TabGroup;
