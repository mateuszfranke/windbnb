import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import stays from '../../../assets/stays.json';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {

  @Input()
  index:number;

  description: string;
  rating: number;
  title: string;
  img: string;
  superHost: boolean;
  beds:number;
  type:string;

  constructor() { }

  ngOnInit(): void {

    this.description = stays[this.index].title;
    this.rating = stays[this.index].rating;
    this.title = stays[this.index].title;
    this.img = stays[this.index].photo;
    this.superHost = stays[this.index].superHost;
    this.beds = stays[this.index].beds;
    this.type = stays[this.index].type;
  }

}
