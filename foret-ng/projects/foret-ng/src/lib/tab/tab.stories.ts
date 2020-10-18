import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { TabModule } from './tab.module';

storiesOf('components/Tab', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, TabModule] }))
  .add('tab', () => ({
    template: `
      <foret-storybook-template>
        <foret-tab-group [selectedValue]="'tab2'">
          <foret-tab [id]="'tab-1'" [labelText]="'Tab 1'" [value]="'tab1'">
            <h1>Tab 1 content</h1>
          </foret-tab>
          <foret-tab [id]="'tab-2'" [labelText]="'Tab 2'" [value]="'tab2'">
            <h2>Tab 2 content</h2>
          </foret-tab>
          <foret-tab [id]="'tab-3'" [labelText]="'Tab 3'" [value]="'tab3'">
            <h3>Tab 3 content</h3>
          </foret-tab>
        </foret-tab-group>
      </foret-storybook-template>
    `,
  }));
