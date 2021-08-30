import { Component, OnInit, TemplateRef } from '@angular/core';
import { TextFieldItem } from 'src/app/model/TextFieldItem';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  modalRef?: BsModalRef;

  rows = 3
  cols = 6

  dummyArray: number[] = []

  array: TextFieldItem[][] = []
  showSidebar = false;

  fonts = ["Arial, Helvetica, sans-serif",
    "'Courier New', Courier, monospace",
    "'Times New Roman', Times, serif"]


  constructor(private modalService: BsModalService) {
    for (let index = 0; index < 1510; index++) {
      this.dummyArray[index] = Math.floor(Math.random() * 120);
    }
  }

  sidebar() {
    this.showSidebar = !this.showSidebar
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.createArray()
  }

  createArray() {
    console.log("rows: " + this.rows + " cols: " + this.cols)
    if (this.rows == 0 || this.cols == 0) {
      console.error("Please input a valid size")
      return;
    }
    this.array = [];
    for (var i: number = 0; i < this.rows + 1; i++) {
      this.array[i] = [];
      for (var j: number = 0; j < this.cols + 1; j++) {
        this.array[i][j] = {
          text: "",
          font: "Arial, Helvetica, sans-serif",
          color: "#FFFFFF"
        };
      }
    }
  }

  deleteFunction(i: number, j: number) {
    console.log(i + ", " + j)
    if (i == 0 && j == 0)
      return
    if (i == 0) {
      for (var i: number = 0; i < this.rows + 1; i++) {
        this.array[i].splice(j, 1);
      }
    } else if (j == 0) {
      this.array.splice(i, 1);
    }
  }

  saveEditedText(i: number, j: number) {
    // console.log(i + "," + j+ ": "+textArea)
    // this.array[i][j].text = textArea
  }

}
