import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonDirective } from './directives/primary-button.directive';
import { SecondaryButtonDirective } from './directives/secondary-button.directive';

@NgModule({
  declarations: [PrimaryButtonDirective, SecondaryButtonDirective],
  imports: [CommonModule],
  exports: [PrimaryButtonDirective, SecondaryButtonDirective],
})
export class ButtonModule {}
