import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'windbnb';

  serching:boolean;

  logIt(val){
    this.serching=val;
    console.log("Information from app component, search is "+this.serching) ;
  }
}
