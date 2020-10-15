import { Component } from '@angular/core';
import {IStays} from './stay-list/stay/IStays';
import {ISearch} from './search/ISearch';
import {ISearchCriteria} from './stay-list/ISearchCriteria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'windbnb';
  searchCriteria:ISearchCriteria;
  serching:boolean;

  SetSearching(val:ISearch){
    this.serching=val.searchFlag
    this.searchCriteria = {searchedValue:"",adultCount:0,childrenCount:0};
    this.searchCriteria.searchedValue=val.searchValue;
    this.searchCriteria.adultCount = val.adultsCount;
    this.searchCriteria.childrenCount = val.childrenCount;


  }

  Switch(val){
    this.serching=val;
  }

}
