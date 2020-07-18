import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { RadioButtonModule } from './radio-button.module';

storiesOf('components|RadioButton', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, RadioButtonModule] }))
  .add('radio button', () => ({
    template: `
      <foret-storybook-template>
        <foret-radio-button-group [legendText]="'Select your option'" [selectedValue]="'radioButton2'" [name]="'sample-radio-button'">
          <foret-radio-button [id]="'radio-button-1'" [labelText]="'Radio button 1'" [value]="'radioButton1'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-2'" [labelText]="'Radio button 2'" [value]="'radioButton2'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-3'" [labelText]="'Radio button 3'" [value]="'radioButton3'"></foret-radio-button>
        </foret-radio-button-group>
      </foret-storybook-template>
    `,
  }))
  .add('disabled radio button', () => ({
    template: `
      <foret-storybook-template>
        <foret-radio-button-group [legendText]="'Select your options'" [selectedValue]="'radioButton2'" [name]="'sample-radio-button'" [disabled]="disabled">
          <foret-radio-button [id]="'radio-button-1'" [labelText]="'Disabled radio button 1'" [value]="'radioButton1'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-2'" [labelText]="'Disabled radio button 2'" [value]="'radioButton2'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-3'" [labelText]="'Disabled radio button 3'" [value]="'radioButton3'"></foret-radio-button>
        </foret-radio-button-group>
      </foret-storybook-template>
    `,
    props: {
      disabled: true,
    },
  }));
