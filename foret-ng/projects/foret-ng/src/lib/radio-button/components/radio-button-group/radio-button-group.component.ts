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
  @Input() selectedValue: string;
  @Input() name: string;
  @Input() disabled: boolean = false;

  @Output() changeRadioButton: EventEmitter<ChangeRadioButtonPayload> = new EventEmitter();

  private destroyed$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedValue'] && !!this.selectedValue) {
      this.updateCheckedState();
    }

    if (changes['disabled']) {
      this.updateDisabledState();
      this.subscribeSelectRadioButtonEvent();
    }
  }

  ngAfterContentInit() {
    this.radioButtons.changes.subscribe(() => {
      this.setSpacingBetweenRadioButtons();
      this.subscribeSelectRadioButtonEvent();
    });

    this.setSpacingBetweenRadioButtons();
    this.subscribeSelectRadioButtonEvent();

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
          (radioButton: RadioButtonComponent) => (radioButton.checked = radioButton.value === this.selectedValue)
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

  private subscribeSelectRadioButtonEvent(): void {
    if (this.radioButtons != null && !this.disabled) {
      this.radioButtons.toArray().forEach((radioButton: RadioButtonComponent) => {
        radioButton.selectRadioButton.pipe(takeUntil(this.destroyed$)).subscribe(() => {
          const isNewRadioButtonSelected: boolean = this.selectedValue !== radioButton.value;

          if (isNewRadioButtonSelected) {
            const newSelectedValue: string = radioButton.value;

            this.selectedValue = newSelectedValue;

            this.updateCheckedState();

            this.changeRadioButton.emit({
              name: this.name,
              newSelectedValue,
            });
          }
        });
      });
    }
  }
}
