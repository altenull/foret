import { ChangeDetectionStrategy, Component, Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'foret-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent implements OnInit {
  @HostBinding('class.--hovered') hostHovered: boolean = false;

  @Input() id: string;
  @Input() labelText: string;
  @Input() value: string;
  @Input() name: string;
  @Input() checked: boolean = false;

  isFocused: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('mouseover') onMouseOver() {
    this.hostHovered = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.hostHovered = false;
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}
