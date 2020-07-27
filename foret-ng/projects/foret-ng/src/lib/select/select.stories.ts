import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { SelectModule } from './select.module';

storiesOf('components/Select', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, SelectModule] }))
  .add('select', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'select'" [name]="'foret-ng-select'" [legendText]="'select'">
          <option value="'dog'">Dog</option>
          <option value="'cat'" disabled>Cat</option>
          <option value="'hamster'" disabled>Hamster</option>
          <option value="'parrot'">Parrot</option>
          <option value="'spider'">Spider</option>
          <option value="'goldfish'">Goldfish</option>
        </foret-select>
      </foret-storybook-template>
    `,
  }))
  .add('select with placeholder', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'select'" [name]="'foret-ng-select'" [legendText]="'select'" [placeholder]="'Please choose an option'">
          <option value="'dog'">Dog</option>
          <option value="'cat'" disabled>Cat</option>
          <option value="'hamster'" disabled>Hamster</option>
          <option value="'parrot'">Parrot</option>
          <option value="'spider'">Spider</option>
          <option value="'goldfish'">Goldfish</option>
        </foret-select>
      </foret-storybook-template>
    `,
  }))
  .add('groupped select', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'select'" [name]="'foret-ng-select'" [legendText]="'select'">
          <optgroup label="Category 1">
            <option value="'dog'">Dog</option>
            <option value="'cat'">Cat</option>
            <option value="'hamster'">Hamster</option>
          </optgroup>

          <optgroup label="Category 2" disabled>
            <option value="'parrot'">Parrot</option>
            <option value="'spider'">Spider</option>
            <option value="'goldfish'">Goldfish</option>
          </optgroup>
        </foret-select>
      </foret-storybook-template>
    `,
  }))
  .add('disabled select', () => ({
    template: `
      <foret-storybook-template>
        <foret-select [id]="'select'" [name]="'foret-ng-select'" [legendText]="'select'" [disabled]="true">
          <option value="'dog'">Dog</option>
          <option value="'cat'" disabled>Cat</option>
          <option value="'hamster'" disabled>Hamster</option>
          <option value="'parrot'">Parrot</option>
          <option value="'spider'">Spider</option>
          <option value="'goldfish'">Goldfish</option>
        </foret-select>
      </foret-storybook-template>
    `,
  }));
