import { Component, OnInit } from '@angular/core';
// @ts-ignore
import stays from '../../../assets/stays.json';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {

  description: string;
  rating: number;
  title: string;
  img: string;
  superHost: boolean;

  constructor() { }

  ngOnInit(): void {
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    this.rating = 4.40;
    this.title = 'Lorem ipsum dolor';
    this.img = stays[0].photo;
    this.superHost = true;
    console.log();
  }

}
