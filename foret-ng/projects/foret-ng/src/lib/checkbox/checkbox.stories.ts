import { storiesOf } from '@storybook/angular';
import { CheckboxModule } from './checkbox.module';

storiesOf('Checkbox', module)
  .add('checkbox', () => ({
    moduleMetadata: {
      imports: [CheckboxModule],
    },
    template: `
      <div style="margin: 32px;">
        <foret-checkbox-group [legendText]="'Select your option'" [name]="'sample-checkbox'">
          <foret-checkbox [id]="'checkbox-1'" [labelText]="'Checkbox 1'" [value]="'checkbox1'"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-2'" [labelText]="'Checkbox 2'" [value]="'checkbox2'" [checked]="true"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-3'" [labelText]="'Checkbox 3'" [value]="'checkbox3'" [checked]="true"></foret-checkbox>
        </foret-checkbox-group>
      </div>
    `,
  }))
  .add('disabled checkbox', () => ({
    moduleMetadata: {
      imports: [CheckboxModule],
    },
    template: `
      <div style="margin: 32px;">
        <foret-checkbox-group [legendText]="'Select your options'" [name]="'sample-checkbox'" [disabled]="disabled">
          <foret-checkbox [id]="'checkbox-1'" [labelText]="'Disabled Checkbox 1'" [value]="'checkbox1'"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-2'" [labelText]="'Disabled Checkbox 2'" [value]="'checkbox2'" [checked]="true"></foret-checkbox>
          <foret-checkbox [id]="'checkbox-3'" [labelText]="'Disabled Checkbox 3'" [value]="'checkbox3'"></foret-checkbox>
        </foret-checkbox-group>
      </div>
    `,
    props: {
      disabled: true,
    },
  }));
