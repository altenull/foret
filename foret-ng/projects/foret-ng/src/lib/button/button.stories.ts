import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { ButtonModule } from './button.module';

storiesOf('components/Button', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, ButtonModule] }))
  .add('primary button', () => ({
    template: `
      <foret-storybook-template>
        <button foretPrimaryButton>primary button</button>

        <foret-storybook-spacing></foret-storybook-spacing>

        <button foretPrimaryButton disabled>primary button (disabled)</button>
      </foret-storybook-template>
    `,
  }))
  .add('secondary button', () => ({
    template: `
      <foret-storybook-template>
        <button foretSecondaryButton>secondary button</button>

        <foret-storybook-spacing></foret-storybook-spacing>

        <button foretSecondaryButton disabled>secondary button (disabled)</button>
      </foret-storybook-template>
    `,
  }))
  .add('danger button', () => ({
    template: `
      <foret-storybook-template>
        <button foretDangerButton>danger button</button>

        <foret-storybook-spacing></foret-storybook-spacing>

        <button foretDangerButton disabled>danger button (disabled)</button>
      </foret-storybook-template>
    `,
  }));
