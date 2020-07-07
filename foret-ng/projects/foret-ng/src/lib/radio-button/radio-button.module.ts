import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

@NgModule({
  declarations: [RadioButtonComponent, RadioButtonGroupComponent],
  imports: [CommonModule],
  exports: [RadioButtonComponent, RadioButtonGroupComponent],
})
export class RadioButtonModule {}
