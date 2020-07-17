import { storiesOf } from '@storybook/angular';
import { ToggleModule } from './toggle.module';

storiesOf('Toggle', module)
  .add('toggle', () => ({
    moduleMetadata: {
      imports: [ToggleModule],
    },
    template: `
      <div style="margin: 32px;">
        <foret-toggle [id]="'toggle-1'" [toggled]="true"></foret-toggle>
        <foret-toggle [id]="'toggle-2'"></foret-toggle>
      </div>
    `,
  }))
  .add('disabled toggle', () => ({
    moduleMetadata: {
      imports: [ToggleModule],
    },
    template: `
      <div style="margin: 32px;">
        <foret-toggle [id]="'toggle-1'" [toggled]="true" [disabled]="disabled"></foret-toggle>
        <foret-toggle [id]="'toggle-2'" [disabled]="disabled"></foret-toggle>
      </div>
    `,
    props: {
      disabled: true,
    },
  }));
