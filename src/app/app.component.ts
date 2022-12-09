import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  addCard(title: string) {
    this.cardsTitle.push(title);
    console.log(this.cardsTitle);
  }
  deleteCard(id: number){
    // console.log("HI");
    this.cardsTitle.splice(id, 1);
    console.log(this.cardsTitle);
    
  }
  constructor(){

  }
}