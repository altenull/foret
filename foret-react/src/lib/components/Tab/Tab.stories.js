import React from 'react';
import { StorybookTemplate } from '../../storybook-util';
import Tab from './Tab';
import TabGroup from './TabGroup';

export default {
  title: 'components/Tab',
};

export const withTab = () => {
  const customHandleClick = (newSelection, name, event) => {
    console.log(`custom handle click(newSelection): ${newSelection}`);
    console.log(`custom handle click(name): ${name}`);
    console.log(`custom handle click(event): ${event}`);
  };

  return (
    <StorybookTemplate>
      <TabGroup selectedValue={'tab2'} name={'foret-react-tab'} onSelect={customHandleClick}>
        <Tab id={'tab-1'} labelText={'Tab 1'} value={'tab1'}>
          <h1>Tab 1 content</h1>
        </Tab>
        <Tab id={'tab-2'} labelText={'Tab 2'} value={'tab2'}>
          <h2>Tab 2 content</h2>
        </Tab>
        <Tab id={'tab-3'} labelText={'Tab 3'} value={'tab3'}>
          <h3>Tab 3 content</h3>
        </Tab>
        <Tab id={'tab-4'} labelText={'Tab 4'} value={'tab4'}>
          <h4>Tab 4 content</h4>
        </Tab>
      </TabGroup>
    </StorybookTemplate>
  );
};
