import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { RadioButtonModule } from './radio-button.module';

storiesOf('components/RadioButton', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, RadioButtonModule] }))
  .add('radio button', () => ({
    template: `
      <foret-storybook-template>
        <foret-radio-button-group [legendText]="'Radio button'" [selectedValue]="'radioButton2'">
          <foret-radio-button [id]="'radio-button-1'" [labelText]="'option 1'" [value]="'radioButton1'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-2'" [labelText]="'option 2'" [value]="'radioButton2'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-3'" [labelText]="'option 3'" [value]="'radioButton3'"></foret-radio-button>
        </foret-radio-button-group>
      </foret-storybook-template>
    `,
  }))
  .add('disabled radio button', () => ({
    template: `
      <foret-storybook-template>
        <foret-radio-button-group [legendText]="'Radio button'" [selectedValue]="'disabledRadioButton2'" [disabled]="true">
          <foret-radio-button [id]="'radio-button-1'" [labelText]="'option 1'" [value]="'disabledRadioButton1'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-2'" [labelText]="'option 2'" [value]="'disabledRadioButton2'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-3'" [labelText]="'option 3'" [value]="'disabledRadioButton3'"></foret-radio-button>
        </foret-radio-button-group>
      </foret-storybook-template>
    `,
  }));
