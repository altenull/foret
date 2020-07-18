import { storiesOf } from '@storybook/angular';
import { ButtonModule } from './button.module';

storiesOf('components|Button', module)
  .add('primary button', () => ({
    moduleMetadata: {
      imports: [ButtonModule],
    },
    template: `
      <div style="margin: 32px;">
        <button foretPrimaryButton style="margin-right: 32px;">primary button</button>
        <button foretPrimaryButton disabled>primary button</button>
      </div>
    `,
  }))
  .add('secondary button', () => ({
    moduleMetadata: {
      imports: [ButtonModule],
    },
    template: `
      <div style="margin: 32px;">
        <button foretSecondaryButton style="margin-right: 32px;">secondary button</button>
        <button foretSecondaryButton disabled>secondary button</button>
      </div>
    `,
  }));
