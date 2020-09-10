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
import { ChangeCheckboxPayload, SelectCheckboxPayload } from '../../models/checkbox';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'foret-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupComponent implements OnInit, AfterContentInit, OnChanges, OnDestroy {
  @ContentChildren(CheckboxComponent) checkboxes: QueryList<CheckboxComponent>;

  @Input() legendText: string;
  @Input() disabled: boolean = false;

  @Output() changeCheckbox: EventEmitter<ChangeCheckboxPayload> = new EventEmitter();

  private destroyed$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['disabled']) {
      this.updateDisabledState();
      this.subscribeSelectCheckboxEvent();
    }
  }

  ngAfterContentInit() {
    this.checkboxes.changes.subscribe(() => {
      this.setSpacingBetweenCheckboxes();
      this.subscribeSelectCheckboxEvent();
    });

    this.setSpacingBetweenCheckboxes();
    this.subscribeSelectCheckboxEvent();

    this.updateDisabledState();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  private setSpacingBetweenCheckboxes(): void {
    if (this.checkboxes != null && this.checkboxes.length > 1) {
      this.checkboxes.toArray().forEach((checkbox: CheckboxComponent, index: number) => {
        const isNotFirstItem: boolean = index > 0;

        if (isNotFirstItem) {
          checkbox.elementRef.nativeElement.style.marginTop = '16px';
        }
      });
    }
  }

  private updateDisabledState(): void {
    if (this.checkboxes != null) {
      this.checkboxes.toArray().forEach((checkbox: CheckboxComponent) => (checkbox.disabled = !!this.disabled));
    }
  }

  private subscribeSelectCheckboxEvent(): void {
    if (this.checkboxes != null && !this.disabled) {
      this.checkboxes.toArray().forEach((checkbox: CheckboxComponent) => {
        checkbox.selectCheckbox.pipe(takeUntil(this.destroyed$)).subscribe(({ newChecked }: SelectCheckboxPayload) => {
          const { id } = checkbox;

          this.changeCheckbox.emit({
            id,
            newChecked,
          });
        });
      });
    }
  }
}
