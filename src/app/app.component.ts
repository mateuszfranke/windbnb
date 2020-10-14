import { Component } from '@angular/core';
import {IStays} from './stay-list/stay/IStays';
import {ISearch} from './search/ISearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'windbnb';
  searchedValue:string;
  serching:boolean;

  SetSearching(val:ISearch){
    this.serching=val.searchFlag
    console.log("searching for: "+val.searchValue)
    this.searchedValue=val.searchValue;
    console.log("Information from app component, search is "+this.serching) ;

  }

  Switch(val){
    this.serching=val;
  }

}
