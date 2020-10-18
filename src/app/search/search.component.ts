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
  searching:boolean = false;
  serchValue:string;
  guestCalc:boolean=true;
  locationResults:boolean;
  Guest:Guests = new Guests();
  locations:string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.searching=true;

    this.locations.push("Finland,Helsinki");
    this.locations.push("Finland,Turku");
    this.locations.push("Finland,Oulu")
    this.locations.push("Finland,Vassa")

  }

  PickLocationForSearch(val:number){
    this.serchValue='';
    this.serchValue=this.locations[val];
  }


  ShowLocation(){
    this.locationResults=true;
    this.guestCalc = false;
  }
  ShowGuests(){
    this.guestCalc = true;
    this.locationResults = false;
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
