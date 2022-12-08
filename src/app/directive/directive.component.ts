import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  username : string = "";
  isenabled : boolean = true;

  onchange():void{
    // console.log(this.username.length)
    if (this.username.length == 0){
      this.isenabled = true;
    }
    else{
      this.isenabled = false;
    }
  }

  reset():void{
    // console.log(this.username.length)
    this.username = "";
    this.onchange();
  }

}
