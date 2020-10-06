import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DangerButtonDirective } from './directives/danger-button.directive';
import { PrimaryButtonDirective } from './directives/primary-button.directive';
import { SecondaryButtonDirective } from './directives/secondary-button.directive';

@NgModule({
  declarations: [PrimaryButtonDirective, SecondaryButtonDirective, DangerButtonDirective],
  imports: [CommonModule],
  exports: [PrimaryButtonDirective, SecondaryButtonDirective, DangerButtonDirective],
})
export class ButtonModule {}
