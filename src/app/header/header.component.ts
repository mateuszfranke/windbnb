import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() search:EventEmitter<any> = new EventEmitter<any>();
  searchActive:boolean;
  constructor() { }


  ngOnInit(): void {
    this.searchActive = false;
  }

  Loger(val){
    this.searchActive = val;
    this.search.emit(val);
  }

}
