import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TogglePayload } from '../../models/toggle';

@Component({
  selector: 'foret-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() id: string;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;

  @Output() toggle: EventEmitter<TogglePayload> = new EventEmitter();

  isFocused: boolean = false;

  constructor() {}

  ngOnInit() {}

  onChange(event: Event) {
    event.stopPropagation();

    if (!this.disabled) {
      const newChecked: boolean = !this.checked;

      this.checked = newChecked;

      this.toggle.emit({
        id: this.id,
        newChecked,
      });
    }
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
