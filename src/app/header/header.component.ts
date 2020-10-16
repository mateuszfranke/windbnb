import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() search:EventEmitter<any> = new EventEmitter<any>();
  @Input() searchedValue:string;
  searchActive:boolean;
  constructor() { }

  ngOnInit(): void {
    this.searchActive = false;
  }

  Loger(val){
    this.searchActive = val;
    this.search.emit(val);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
