import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { SelectModule } from './select.module';

storiesOf('components/Select', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, SelectModule] }))
  .add('select', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'select'" [legendText]="'select'">
          <option value="option1">option 1</option>
          <option value="option2" selected>option 2</option>
          <option value="option3" disabled>option 3</option>
          <option value="option4" disabled>option 4</option>
          <option value="option5">option 5</option>
          <option value="option6">option 6</option>
        </foret-select>
      </foret-storybook-template>
    `,
  }))
  .add('select with placeholder', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'select-with-placeholder'" [legendText]="'select'" [placeholder]="'Please choose an option'">
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3" disabled>option 3</option>
          <option value="option4" disabled>option 4</option>
          <option value="option5">option 5</option>
          <option value="option6">option 6</option>
        </foret-select>
      </foret-storybook-template>
    `,
  }))
  .add('grouped select', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'grouped-select'" [legendText]="'select'">
          <optgroup label="Category 1">
            <option value="option1">option 1</option>
            <option value="option2" selected>option 2</option>
            <option value="option3" disabled>option 3</option>
          </optgroup>

          <optgroup label="Category 2" disabled>
            <option value="option4">option 4</option>
            <option value="option5">option 5</option>
            <option value="option6">option 6</option>
          </optgroup>
        </foret-select>
      </foret-storybook-template>
    `,
  }))
  .add('disabled select', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'disabled-select'" [legendText]="'select'" [disabled]="true">
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3">option 3</option>
          <option value="option4">option 4</option>
          <option value="option5">option 5</option>
          <option value="option6">option 6</option>
        </foret-select>
      </foret-storybook-template>
    `,
  }));
