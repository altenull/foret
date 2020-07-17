import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { SelectCheckboxPayload } from '../../models/checkbox';

@Component({
  selector: 'foret-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @HostBinding('class.--disabled') hostDisabled: boolean = false;

  @Input() id: string;
  @Input() labelText: string;
  @Input() value: string;
  @Input() checked: boolean = false;

  get disabled(): boolean {
    return this._disabled;
  }
  @Input()
  set disabled(value: boolean) {
    if (value != null) {
      this._disabled = value;
      this.hostDisabled = this._disabled;
    }
  }
  private _disabled: boolean = false;

  @Output() selectCheckbox: EventEmitter<SelectCheckboxPayload> = new EventEmitter();

  isFocused: boolean = false;

  // To be able to set its style property from checkbox-group, declare elementRef as public
  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {}

  onChange(event: Event) {
    event.stopPropagation();

    if (!this.disabled) {
      const newChecked: boolean = !this.checked;

      this.checked = newChecked;

      this.selectCheckbox.emit({
        newChecked,
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
