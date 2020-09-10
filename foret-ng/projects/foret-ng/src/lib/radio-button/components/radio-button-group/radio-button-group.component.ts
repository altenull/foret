import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChangeRadioButtonPayload } from '../../models/radio-button';
import { RadioButtonComponent } from '../radio-button/radio-button.component';

@Component({
  selector: 'foret-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonGroupComponent implements OnInit, AfterContentInit, OnChanges, OnDestroy {
  @ContentChildren(RadioButtonComponent) radioButtons: QueryList<RadioButtonComponent>;

  @Input() legendText: string;
  @Input() checkedValue: string;
  @Input() disabled: boolean = false;

  @Output() changeRadioButton: EventEmitter<ChangeRadioButtonPayload> = new EventEmitter();

  private destroyed$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['checkedValue'] && !!this.checkedValue) {
      this.updateCheckedState();
    }

    if (changes['disabled']) {
      this.updateDisabledState();
      this.subscribeCheckRadioButtonEvent();
    }
  }

  ngAfterContentInit() {
    this.radioButtons.changes.subscribe(() => {
      this.setSpacingBetweenRadioButtons();
      this.subscribeCheckRadioButtonEvent();
    });

    this.setSpacingBetweenRadioButtons();
    this.subscribeCheckRadioButtonEvent();

    this.updateCheckedState();
    this.updateDisabledState();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  private setSpacingBetweenRadioButtons(): void {
    if (this.radioButtons != null && this.radioButtons.length > 1) {
      this.radioButtons.toArray().forEach((radioButton: RadioButtonComponent, index: number) => {
        const isNotFirstItem: boolean = index > 0;

        if (isNotFirstItem) {
          radioButton.elementRef.nativeElement.style.marginTop = '16px';
        }
      });
    }
  }

  private updateCheckedState(): void {
    if (this.radioButtons != null) {
      this.radioButtons
        .toArray()
        .forEach(
          (radioButton: RadioButtonComponent) => (radioButton.checked = radioButton.value === this.checkedValue)
        );
    }
  }

  private updateDisabledState(): void {
    if (this.radioButtons != null) {
      this.radioButtons
        .toArray()
        .forEach((radioButon: RadioButtonComponent) => (radioButon.disabled = !!this.disabled));
    }
  }

  private subscribeCheckRadioButtonEvent(): void {
    if (this.radioButtons != null && !this.disabled) {
      this.radioButtons.toArray().forEach((radioButton: RadioButtonComponent) => {
        radioButton.checkRadioButton.pipe(takeUntil(this.destroyed$)).subscribe(() => {
          const newCheckedValue: string = radioButton.value;
          const isNewRadioButtonChecked: boolean = this.checkedValue !== newCheckedValue;

          if (isNewRadioButtonChecked) {
            this.checkedValue = newCheckedValue;

            this.updateCheckedState();

            this.changeRadioButton.emit({
              id: radioButton.id,
              newCheckedValue,
            });
          }
        });
      });
    }
  }
}
