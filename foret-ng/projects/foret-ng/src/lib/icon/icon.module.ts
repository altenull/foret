import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronUpIconComponent } from './components/chevron-up-icon/chevron-up-icon.component';
import { ChevronDownIconComponent } from './components/chevron-down-icon/chevron-down-icon.component';

@NgModule({
  declarations: [ChevronUpIconComponent, ChevronDownIconComponent],
  imports: [CommonModule],
  exports: [ChevronUpIconComponent, ChevronDownIconComponent],
})
export class IconModule {}
