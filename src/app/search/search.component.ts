import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ISearch} from './ISearch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search:EventEmitter<ISearch> = new EventEmitter<ISearch>();
  searching:boolean = true;
  serchValue:string;

  constructor() { }

  ngOnInit(): void {
  }

  LogIt(val){

    console.log("Search Component:"+ val);
  }

  Search(){
    this.searching = !this.searching;
    console.log("emmited "+this.searching);

    this.search.emit(
      {
        searchValue:this.serchValue,
        searchFlag:this.searching
            });
  }

}
