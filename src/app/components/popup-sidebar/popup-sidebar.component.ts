import { Component, Input, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { slideToRight } from './animations';

@Component({
  selector: 'app-popup-sidebar',
  templateUrl: './popup-sidebar.component.html',
  styleUrls: ['./popup-sidebar.component.css'],
  animations: [
    slideToRight()
  ]
})
export class PopupSidebarComponent implements OnInit {

  @Input()
  show = false;

  @Input()
  items:number[] = []

  returnedArray?: number[];

  constructor() {
    this.returnedArray = this.items.slice(0, 10);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.items.slice(startItem, endItem);
  }

  ngOnInit(): void {
  }

}
