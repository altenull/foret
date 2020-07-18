import { moduleMetadata, storiesOf } from '@storybook/angular';
import { StorybookUtilModule } from '../../storybook-util';
import { ButtonModule } from './button.module';

storiesOf('components|Button', module)
  .addDecorator(moduleMetadata({ imports: [StorybookUtilModule, ButtonModule] }))
  .add('primary button', () => ({
    template: `
      <foret-storybook-template>
        <button foretPrimaryButton>primary button</button>

        <foret-storybook-spacing></foret-storybook-spacing>

        <button foretPrimaryButton disabled>primary button</button>
      </foret-storybook-template>
    `,
  }))
  .add('secondary button', () => ({
    template: `
      <foret-storybook-template>
        <button foretSecondaryButton>secondary button</button>

        <foret-storybook-spacing></foret-storybook-spacing>

        <button foretSecondaryButton disabled>secondary button</button>
      </foret-storybook-template>
    `,
  }));
