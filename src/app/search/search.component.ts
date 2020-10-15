import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISearch} from './ISearch';
import {Guests} from './Guests';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchValuesOut:EventEmitter<ISearch> = new EventEmitter<ISearch>();
  @Input() localizations:string[];
  searching:boolean = true;
  serchValue:string;
  guestCount:number=0;
  Guest:Guests = new Guests();

  constructor() { }

  ngOnInit(): void {
  }

  LogIt(val){

    console.log("Search Component:"+ val);
  }

  Search(){
    this.searching = !this.searching;
    console.log("emmited "+this.searching);

    this.searchValuesOut.emit(
      {
        searchValue:this.serchValue,
        searchFlag:this.searching
            });
  }

  AddAdult(){
    // this.guestCount+=1;
    this.Guest.AddAdult();
  }
  RemoveAdult(){
    this.Guest.RemoveAdult();

  }


}
