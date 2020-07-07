import { storiesOf } from '@storybook/angular';
import { RadioButtonModule } from './radio-button.module';

storiesOf('RadioButton', module).add('radio button', () => ({
  moduleMetadata: {
    imports: [RadioButtonModule],
  },
  template: `
      <div style="margin: 32px;">
        <foret-radio-button-group [legendText]="'Select your option'" [selectedValue]="'radioButton2'" [name]="'sample-radio-button'">
          <foret-radio-button [id]="'radio-button-1'" [labelText]="'Radio button 1'" [value]="'radioButton1'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-2'" [labelText]="'Radio button 2'" [value]="'radioButton2'"></foret-radio-button>
          <foret-radio-button [id]="'radio-button-3'" [labelText]="'Radio button 3'" [value]="'radioButton3'"></foret-radio-button>
        </foret-radio-button-group>
      </div>
    `,
}));