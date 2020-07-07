import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'foret-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  @Input() id: string;
  @Input() labelText: string;
  @Input() value: string;
  @Input() checked: boolean = false;

  @Output() selectRadioButton: EventEmitter<void> = new EventEmitter();

  isFocused: boolean = false;

  // To be able to set its style property from radio-button-group, declare elementRef as public
  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('click') onClick() {
    this.selectRadioButton.emit();
  }

  onChange(event: Event) {
    event.stopPropagation();
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}
