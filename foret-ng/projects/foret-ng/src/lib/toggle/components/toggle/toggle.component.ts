import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TogglePayload } from '../../models/toggle';

@Component({
  selector: 'foret-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() id: string;
  @Input() toggled: boolean = false;
  @Input() disabled: boolean = false;

  @Output() toggle: EventEmitter<TogglePayload> = new EventEmitter();

  isFocused: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onChange(event: Event) {
    event.stopPropagation();

    if (!this.disabled) {
      const newToggled: boolean = !this.toggled;

      this.toggled = newToggled;

      this.toggle.emit({
        id: this.id,
        newToggled,
      });
    }
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}
