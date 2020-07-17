import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [CheckboxComponent, CheckboxGroupComponent],
  imports: [CommonModule],
  exports: [CheckboxComponent, CheckboxGroupComponent],
})
export class CheckboxModule {}
