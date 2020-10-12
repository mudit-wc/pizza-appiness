import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent {
  @Input() itemHeader: string; // header for items
  @Input() itemData: any; // data of order
  @Input() detailsData: any; // detail data of orders
  @Input() isDetailsVisible: boolean = false; // flag to set the detail view, by default false 
  @Input() isChangeButtonVisible: boolean = true; // falg to set the chnage status button view, by default true
  @Output() onDetailsClick: EventEmitter<any> = new EventEmitter(); // output event property
  @Output() onChangeStatusClick: EventEmitter<any> = new EventEmitter(); // output event property

  // method called on details butoon click
  onBtnClick(id: number): void {
    this.onDetailsClick.emit(id); // event emmitted and to be captured in featured modules
  }

  // method called on status chnage button click
  onStatusBtnClick(id, status): void {
    this.onChangeStatusClick.emit({ id, status }); // event emmitted and to be captured in features modules.
  }
}
