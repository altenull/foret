import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { CheckboxModule } from './checkbox.module';

storiesOf('components/Checkbox', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, CheckboxModule] }))
  .add('checkbox', () => ({
    template: `
      <foret-storybook-template>
        <foret-checkbox-group [legendText]="'checkbox'" [name]="'foret-ng-checkbox'">
          <foret-checkbox [id]="'checkbox-1'" [labelText]="'option 1'" [value]="'checkbox1'"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-2'" [labelText]="'option 2'" [value]="'checkbox2'" [checked]="true"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-3'" [labelText]="'option 3'" [value]="'checkbox3'" [checked]="true"></foret-checkbox>
        </foret-checkbox-group>
      </foret-storybook-template>
    `,
  }))
  .add('disabled checkbox', () => ({
    template: `
      <foret-storybook-template>
        <foret-checkbox-group [legendText]="'checkbox'" [name]="'foret-ng-checkbox'" [disabled]="true">
          <foret-checkbox [id]="'disabled-checkbox-1'" [labelText]="'option 1'" [value]="'disabledCheckbox1'"></foret-checkbox>
          <foret-checkbox [id]="'disabled-checkbox-2'" [labelText]="'option 2'" [value]="'disabledCheckbox2'" [checked]="true"></foret-checkbox>
          <foret-checkbox [id]="'disabled-checkbox-3'" [labelText]="'option 3'" [value]="'disabledCheckbox3'" [checked]="true"></foret-checkbox>
        </foret-checkbox-group>
      </foret-storybook-template>
    `,
  }));
