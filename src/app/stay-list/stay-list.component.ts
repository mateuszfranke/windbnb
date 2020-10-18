import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
// @ts-ignore
import stays from "../../assets/stays.json";
import {IStays} from './stay/IStays';
import {ISearchCriteria} from './ISearchCriteria';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.css']
})
export class StayListComponent implements OnInit {

  stays:number;
  staysArr:IStays[] =[];
  location:string[];
  single:boolean = false;
  @Input() searchCriteria:ISearchCriteria;
  localizations:string[];

  constructor() {

  }

  ngOnInit(): void {
    this.searchCriteria = {searchedValue:"",childrenCount:0,adultCount:0}
    this.staysArr=stays;
  }

  ngOnChanges(changes: SimpleChanges) {

    this.staysArr = null;
    this.staysArr=[];
    this.location=[];

    if(this.searchCriteria !== undefined)
    {
      if(this.searchCriteria.searchedValue.includes(","))
      {
        this.location = this.searchCriteria.searchedValue.split(",");
        this.single = false;
      }else{
        this.single = true;
      }

      for (let i=0;i<stays.length;i++)
      {

        if(this.single)
        {
          if(stays[i].country.toUpperCase()==this.searchCriteria.searchedValue.toUpperCase())
          {
            if((this.searchCriteria.childrenCount + this.searchCriteria.adultCount) < stays[i].maxGuests)
            {
              this.staysArr.push(stays[i]);
            }

          }

        }else
        {
          if(
            stays[i].country.toUpperCase()==this.location[0].toUpperCase() &&
            stays[i].city.toUpperCase()==this.location[1].toUpperCase()
          )
          {
            if((this.searchCriteria.childrenCount + this.searchCriteria.adultCount) < stays[i].maxGuests)
            {
              this.staysArr.push(stays[i]);
            }
          }
        }

      }
      this.stays=this.staysArr.length;
    }

  }

}
