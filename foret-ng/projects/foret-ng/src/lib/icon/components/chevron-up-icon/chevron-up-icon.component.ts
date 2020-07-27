import { Color } from '@altenull/foret-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foret-chevron-up-icon',
  templateUrl: './chevron-up-icon.component.html',
  styleUrls: ['./chevron-up-icon.component.scss'],
})
export class ChevronUpIconComponent implements OnInit {
  @Input() size: number = 16;
  @Input() color: string = Color.Stone;

  constructor() {}

  ngOnInit() {}
}
