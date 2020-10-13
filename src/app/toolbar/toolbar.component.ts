import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  location: string;
  constructor() { }

  ngOnInit(): void {
    this.location = 'Helsinki,Finland';
  }

}
