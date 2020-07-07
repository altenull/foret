import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
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
export class RadioButtonGroupComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(RadioButtonComponent) radioButtons: QueryList<RadioButtonComponent>;

  @Input() legendText: string;
  @Input() selectedValue: string;
  @Input() name: string;

  @Output() changeRadioButton: EventEmitter<ChangeRadioButtonPayload> = new EventEmitter();

  private destroyed$: Subject<boolean> = new Subject();

  ngAfterContentInit() {
    if (this.radioButtons.length > 1) {
      this.setSpacingBetweenRadioButtons();
    }

    this.updateCheckedRadioButton();
    this.subscribeSelectRadioButtonEvent();
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  private setSpacingBetweenRadioButtons(): void {
    this.radioButtons.toArray().forEach((radioButton: RadioButtonComponent, index: number) => {
      const isNotFirstItem: boolean = index > 0;

      if (isNotFirstItem) {
        radioButton.elementRef.nativeElement.style.marginTop = '16px';
      }
    });
  }

  private updateCheckedRadioButton(): void {
    this.radioButtons
      .toArray()
      .forEach((radioButton: RadioButtonComponent) => (radioButton.checked = radioButton.value === this.selectedValue));
  }

  private subscribeSelectRadioButtonEvent(): void {
    this.radioButtons.toArray().forEach((radioButton: RadioButtonComponent) => {
      radioButton.selectRadioButton.pipe(takeUntil(this.destroyed$)).subscribe(() => {
        const isNewRadioButtonSelected: boolean = this.selectedValue !== radioButton.value;

        if (isNewRadioButtonSelected) {
          const newSelection: string = radioButton.value;

          this.selectedValue = newSelection;

          this.updateCheckedRadioButton();

          this.changeRadioButton.emit({
            newSelection,
            name: this.name,
          });
        }
      });
    });
  }
}
