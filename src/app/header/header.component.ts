import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchActive:boolean;
  constructor() { }

  ngOnInit(): void {
    this.searchActive = false;
  }

  Loger(val){
    console.log(val);
  }

}
