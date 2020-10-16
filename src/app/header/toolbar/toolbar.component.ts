import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() location: string;
  search:boolean;
  @Output() onSearch:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.search = false;
  }

  deleteComment() {
    this.search=!this.search;
    this.onSearch.emit(this.search);
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
