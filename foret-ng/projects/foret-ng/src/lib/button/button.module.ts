import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonDirective } from './directives/primary-button.directive';

@NgModule({
  declarations: [PrimaryButtonDirective],
  imports: [CommonModule],
  exports: [PrimaryButtonDirective],
})
export class ButtonModule {}
