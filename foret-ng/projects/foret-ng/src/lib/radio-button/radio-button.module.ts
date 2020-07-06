import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';

@NgModule({
  declarations: [RadioButtonComponent, RadioButtonGroupComponent],
  imports: [CommonModule],
  exports: [RadioButtonComponent, RadioButtonGroupComponent],
})
export class RadioButtonModule {}
