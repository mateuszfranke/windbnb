import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search:EventEmitter<any> = new EventEmitter<any>();
  searching:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  LogIt(val){

    console.log("Search Component:"+ val);
  }

  Search(){
    this.searching = !this.searching;
    console.log("emmited "+this.searching);
    this.search.emit(this.searching)
  }

}
