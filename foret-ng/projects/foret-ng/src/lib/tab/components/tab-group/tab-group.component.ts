import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ChangeTabPayload } from '../../models/tab';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'foret-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit, OnDestroy, AfterContentInit, AfterContentChecked {
  @ViewChild('tabListContainer', { read: ElementRef }) tabListContainerRef: ElementRef;
  @ViewChildren('tabItem', { read: ElementRef }) tabItemRefs: QueryList<any>;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @Input() selectedValue: string;

  @Output() changeTab: EventEmitter<ChangeTabPayload> = new EventEmitter();

  tabIndicatorLeft: number | null = null;
  tabIndicatorWidth: number | null = null;

  private destroyed$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedValue'] && !!this.selectedValue) {
      this.updateSelectedState();
    }
  }

  ngAfterContentInit() {
    if (this.tabs != null) {
      const hasNoSelectedTab: boolean = !this.tabs.some((tab: TabComponent) => tab.selected);

      if (hasNoSelectedTab) {
        this.selectTab(this.selectedValue || this.tabs.toArray()[0].value);
      }
    }

    this.updateSelectedState();
  }

  ngAfterContentChecked() {
    this.updateTabIndicator();
    this.updateTabIndicator();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  private updateSelectedState(): void {
    if (this.tabs != null) {
      this.tabs.toArray().forEach((tab: TabComponent) => (tab.selected = tab.value === this.selectedValue));
    }
  }

  updateTabIndicator(): void {
    if (this.tabItemRefs != null) {
      const selectedTabIndex: number = this.tabs.toArray().findIndex((tab: TabComponent) => tab.selected);

      if (selectedTabIndex !== -1) {
        const tabListContainerDOMRect: DOMRect = this.tabListContainerRef.nativeElement.getBoundingClientRect();
        const selectedTabItemDOMRect: DOMRect = this.tabItemRefs
          .toArray()
          [selectedTabIndex].nativeElement.getBoundingClientRect();

        this.tabIndicatorWidth = selectedTabItemDOMRect.width;
        this.tabIndicatorLeft = selectedTabItemDOMRect.left - tabListContainerDOMRect.left;
      }
    }
  }

  selectTab(newSelectedValue: string): void {
    if (this.tabs != null) {
      this.tabs.toArray().forEach((tab: TabComponent) => {
        const isNewTabSelected: boolean = this.selectedValue !== newSelectedValue;

        if (isNewTabSelected) {
          this.selectedValue = newSelectedValue;

          this.updateSelectedState();
          this.updateTabIndicator();

          this.changeTab.emit({
            id: tab.id,
            newSelectedValue,
          });
        }
      });
    }
  }
}
