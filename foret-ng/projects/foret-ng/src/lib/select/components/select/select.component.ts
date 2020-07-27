import { Color } from '@altenull/foret-core';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeSelectPayload } from '../../models/select';

@Component({
  selector: 'foret-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() legendText: string;
  @Input() placeholder: string;
  @Input() disabled: boolean = false;

  @Output() changeSelect: EventEmitter<ChangeSelectPayload> = new EventEmitter();

  isHovered: boolean = false;

  Color = Color;

  protected value = '';
  protected onChangeHandler = (_: any) => {};
  protected onTouchedHandler = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChangeHandler = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedHandler = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onChange(event: any) {
    this.onChangeHandler(event.target.value);
    this.changeSelect.emit({
      name: this.name,
      newSelectedValue: event.target.value,
    });
  }

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }
}
