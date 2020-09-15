/** @jsx jsx */
import { Color } from '@altenull/foret-core';
import { css, jsx } from '@emotion/core';
import React, { useEffect, useRef, useState } from 'react';
import { TabGroupProps } from './models/tab-group-props';
import Tab from './Tab';

const tabListContainerStyles = css`
  position: relative;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${Color.Fog};
`;

const tabIndicatorStyles = (left: number, width: number) => css`
  position: absolute;
  left: ${left}px;
  bottom: 0;
  min-width: ${width}px;
  min-height: 2px;
  background-color: ${Color.ForetGreen};
  transition: all 0.3s linear;
`;

const TabGroup: React.FC<TabGroupProps> = ({ children, selectedValue, onChange = () => {} }: TabGroupProps) => {
  const [selected, setSelected] = useState<string>(selectedValue);
  const [tabIndicatorStatus, setTabIndicatorStatus] = useState<{ left: number; width: number }>(null);
  const tabListContainerRef = useRef(null);

  useEffect(() => {
    if (tabListContainerRef != null) {
      const selectedTabIndex: number = React.Children.toArray(children).findIndex(
        (child) => React.isValidElement(child) && child.props.value === selected
      );
      const tabListContainerDOMRect: DOMRect = tabListContainerRef.current.getBoundingClientRect();
      const selectedTabDOMRect: DOMRect = tabListContainerRef.current.children[
        selectedTabIndex
      ].getBoundingClientRect();

      setTabIndicatorStatus({
        left: selectedTabDOMRect.left - tabListContainerDOMRect.left,
        width: selectedTabDOMRect.width,
      });
    }
  }, [children, selected, tabListContainerRef, setTabIndicatorStatus]);

  const handleChange = (id: string, newSelectedValue: string) => {
    if (newSelectedValue !== selected) {
      setSelected(newSelectedValue);
      onChange(id, newSelectedValue);
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
            value={value}
            selected={value === selected}
            onChange={handleChange}
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
      <ul css={tabListContainerStyles} ref={tabListContainerRef}>
        {getTabs()}
        {tabIndicatorStatus != null && (
          <span css={tabIndicatorStyles(tabIndicatorStatus.left, tabIndicatorStatus.width)} />
        )}
      </ul>
      <div>{getContent()}</div>
    </div>
  );
};

export default TabGroup;
