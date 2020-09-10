import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, HostListener } from '@angular/core';

@Component({
  selector: 'foret-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
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

  @Output() checkRadioButton: EventEmitter<void> = new EventEmitter();

  isFocused: boolean = false;

  // To be able to set its style property from radio-button-group, declare elementRef as public
  constructor(public elementRef: ElementRef) {}

  ngOnInit() {}

  onClick() {
    if (!this.disabled) {
      this.checkRadioButton.emit();
    }
  }

  onChange(event: Event) {
    event.stopPropagation();
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
