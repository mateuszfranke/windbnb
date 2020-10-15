export class Guests{

  kids:number=0;
  adults:number=0;

  constructor() {
  }

  ShowTotal(){
    return this.kids+this.adults;
  }

  AddKid(){
    this.kids+=1;
  }
  RemoveKid(){
    if(this.kids>0) {
      this.kids-=1;
    }

  }
  AddAdult(){
    this.adults+=1;
  }
  RemoveAdult(){
    if(this.adults>0){
      this.adults-=1;
    }
  }

}
