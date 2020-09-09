import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { ToggleModule } from './toggle.module';

storiesOf('components/Toggle', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, ToggleModule] }))
  .add('toggle', () => ({
    template: `
      <foret-storybook-template>
        <foret-toggle [id]="'toggle-1'" [checked]="true"></foret-toggle>

        <foret-storybook-spacing></foret-storybook-spacing>

        <foret-toggle [id]="'toggle-2'"></foret-toggle>
      </foret-storybook-template>
    `,
  }))
  .add('disabled toggle', () => ({
    template: `
      <foret-storybook-template>
        <foret-toggle [id]="'disabled-toggle-1'" [checked]="true" [disabled]="true"></foret-toggle>

        <foret-storybook-spacing></foret-storybook-spacing>

        <foret-toggle [id]="'disabled-toggle-2'" [disabled]="true"></foret-toggle>
      </foret-storybook-template>
    `,
  }));
