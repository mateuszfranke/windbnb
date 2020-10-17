import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISearch} from './ISearch';
import {Guests} from './Guests';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchCriteriaOut:EventEmitter<ISearch> = new EventEmitter<ISearch>();
  @Input() localizations:string[];
  searching:boolean = true;
  serchValue:string;
  guestCalc:boolean=true;
  Guest:Guests = new Guests();
  locations:string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.locations.push("Helsinki,Finland");
    this.locations.push("Turku,Finland");
    this.locations.push("Oulu,Finland")
    this.locations.push("Vassa,Finland")

  }



  Search(){
    this.searching = !this.searching;

    this.searchCriteriaOut.emit(
      {
        searchValue:this.serchValue,
        searchFlag:this.searching,
        adultsCount:this.Guest.adults,
        childrenCount:this.Guest.kids
            });
  }
  AddAdult(){
    this.Guest.AddAdult();
  }
  RemoveAdult(){
    this.Guest.RemoveAdult();
  }


}
