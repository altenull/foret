import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foret-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() id: string;
  @Input() labelText: string;
  @Input() value: string;
  @Input() selected: boolean;

  constructor() {}

  ngOnInit(): void {}
}
