import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  size: string = '1.2 rem';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';
  likeCount: number = 0;
  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;
  imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  server: {id: number, status: string} = {id: 10, status: 'offline'};
  title: string = 'Data Binding';
  port: number = 4200;

  @Input() titles: string[] = [];
  // cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  @Output() titleEvent$ = new EventEmitter<string>();

  @Output() titleEventDelete$ = new EventEmitter<number>();

  onAddCard(title: string): void {
    this.titleEvent$.emit(title);
  }

  onDeleteCard(id: number): void {
    this.titleEventDelete$.emit(id);
  }
  
  onLike(): void {
    this.likeCount++;
    alert('You liked Shiba!')
  }

  getServerStatus(): string {
    return this.server.status;
  }
  constructor() { }

  ngOnInit(): void {
    // console.log("component has been initialized!")
  }

}
