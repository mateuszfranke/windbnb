import { Component, OnInit } from '@angular/core';
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
  staysArr:IStays[];
  constructor() { }

  ngOnInit(): void {
    this.stays=12;
    this.staysArr=stays;
    console.log(this.staysArr[2])
  }

}
