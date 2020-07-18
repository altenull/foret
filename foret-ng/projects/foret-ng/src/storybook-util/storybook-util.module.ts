import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StorybookTemplateComponent } from './components/storybook-template/storybook-template.component';
import { StorybookSpacingComponent } from './components/storybook-spacing/storybook-spacing.component';

@NgModule({
  declarations: [StorybookTemplateComponent, StorybookSpacingComponent],
  imports: [CommonModule],
  exports: [StorybookTemplateComponent, StorybookSpacingComponent],
})
export class StorybookUtilModule {}
