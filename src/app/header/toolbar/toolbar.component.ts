import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  location: string;
  search:boolean;
  @Output() onSearch:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.location = 'Helsinki,Finland';
    this.search = false;
  }

  deleteComment() {
    this.search=!this.search;
    this.onSearch.emit(this.search);
  }

}
