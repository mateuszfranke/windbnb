import { Component, OnInit } from '@angular/core';
// @ts-ignore
import stays from "../../assets/stays.json";

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.css']
})
export class StayListComponent implements OnInit {

  stays:number;
  constructor() { }

  ngOnInit(): void {
    this.stays=12;
    console.log(stays)
  }

}
