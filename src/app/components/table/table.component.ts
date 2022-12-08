import { Component } from '@angular/core';



export interface user  {
  username: string;
  address: string;
  age: number;
}

const user_data: user [] = [
  {age: 10, address: 'Hydrogen',  username: 'H'},
  {age: 20, address: 'Helium',  username: 'He'},
  {age: 31, address: 'Lithium',  username: 'Li'},
  {age: 41, address: 'Beryllium',  username: 'Be'},
  {age: 52, address: 'Boron',  username: 'B'},
  {age: 63, address: 'Carbon',  username: 'C'},
  {age: 71, address: 'Nitrogen',  username: 'N'},
  {age: 82, address: 'Oxygen',  username: 'O'},
  {age: 93, address: 'Fluorine',  username: 'F'},
  {age: 10, address: 'Neon',  username: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  displayedColumns: string[] = ['useraddress', 'address', 'age'];
  dataSource = user_data;
}
