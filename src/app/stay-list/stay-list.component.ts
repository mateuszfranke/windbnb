import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
// @ts-ignore
import stays from "../../assets/stays.json";
import {IStays} from './stay/IStays';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.css']
})
export class StayListComponent implements OnInit {

  stays:number;
  staysArr:IStays[] =[];
  location:string[];
  single:boolean;
  @Input() searchedValue:string;
  localizations:string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.staysArr = null;
    this.staysArr=[];
    this.location=[];

    console.log("stay-list: "+ this.searchedValue)

    if(this.searchedValue.includes(","))
    {
      // console.log("we need to split into city/country: "+this.searchedValue)
      this.location = this.searchedValue.split(",");
    }else{
      this.single = true;
    }

    for (let i=0;i<stays.length;i++)
    {
      if(this.single)
      {
        if(stays[i].country.toUpperCase()==this.searchedValue.toUpperCase())
        {
          this.staysArr.push(stays[i]);

        }

      }else
        {
          if(
            stays[i].country.toUpperCase()==this.location[0].toUpperCase() &&
            stays[i].city.toUpperCase()==this.location[1].toUpperCase()
          )
          {
            this.staysArr.push(stays[i]);
          }
        }

    }

    // for (let i=0; i<stays.length;i++)
    // {
    //   if(stays[i].city.toUpperCase()==this.searchedValue.toUpperCase())
    //   {
    //    this.staysArr.push(stays[i]);
    //   }
    // }

    this.stays=this.staysArr.length;
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

  }

}
