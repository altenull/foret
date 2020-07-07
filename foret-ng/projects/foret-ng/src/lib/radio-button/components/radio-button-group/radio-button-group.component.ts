import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foret-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonGroupComponent implements OnInit {
  @Input() legendText: string;
  @Input() selectedValue: string;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
