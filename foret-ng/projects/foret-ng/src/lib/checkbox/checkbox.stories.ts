import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { CheckboxModule } from './checkbox.module';

storiesOf('components/Checkbox', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, CheckboxModule] }))
  .add('checkbox', () => ({
    template: `
      <foret-storybook-template>
        <foret-checkbox-group [legendText]="'Checkbox'">
          <foret-checkbox [id]="'checkbox-1'" [labelText]="'option 1'"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-2'" [labelText]="'option 2'" [checked]="true"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-3'" [labelText]="'option 3'" [checked]="true"></foret-checkbox>
        </foret-checkbox-group>
      </foret-storybook-template>
    `,
  }))
  .add('disabled checkbox', () => ({
    template: `
      <foret-storybook-template>
        <foret-checkbox-group [legendText]="'Checkbox'" [disabled]="true">
          <foret-checkbox [id]="'disabled-checkbox-1'" [labelText]="'option 1'"></foret-checkbox>
          <foret-checkbox [id]="'disabled-checkbox-2'" [labelText]="'option 2'" [checked]="true"></foret-checkbox>
          <foret-checkbox [id]="'disabled-checkbox-3'" [labelText]="'option 3'" [checked]="true"></foret-checkbox>
        </foret-checkbox-group>
      </foret-storybook-template>
    `,
  }));
