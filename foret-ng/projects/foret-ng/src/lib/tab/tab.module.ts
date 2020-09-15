import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [TabComponent, TabGroupComponent],
  imports: [CommonModule],
  exports: [TabComponent, TabGroupComponent],
})
export class TabModule {}
