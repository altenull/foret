import { Color } from '@altenull/foret-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foret-chevron-down-icon',
  templateUrl: './chevron-down-icon.component.html',
  styleUrls: ['./chevron-down-icon.component.scss'],
})
export class ChevronDownIconComponent implements OnInit {
  @Input() size: number = 16;
  @Input() color: string = Color.Stone;

  constructor() {}

  ngOnInit() {}
}
