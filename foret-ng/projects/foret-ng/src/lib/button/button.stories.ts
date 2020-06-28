import { storiesOf } from '@storybook/angular';
import { ButtonModule } from './button.module';

storiesOf('Button', module).add('primary button', () => ({
  moduleMetadata: {
    imports: [ButtonModule],
  },
  template: `
    <div style="margin: 32px;">
      <button foretPrimaryButton>primary button</button>
    </div>
  `,
}));
