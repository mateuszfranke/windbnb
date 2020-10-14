import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
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

  @Input() searchedValue:string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.staysArr = null;
    this.staysArr=[];
    console.log("stay-list: "+ this.searchedValue)
    for (let i=0; i<stays.length;i++)
    {
      if(stays[i].country.toUpperCase()==this.searchedValue.toUpperCase())
      {
       this.staysArr.push(stays[i]);
      }
    }
    this.stays=this.staysArr.length;
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

  }

}
