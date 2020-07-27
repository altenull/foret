import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, IconModule],
  exports: [SelectComponent],
})
export class SelectModule {}
