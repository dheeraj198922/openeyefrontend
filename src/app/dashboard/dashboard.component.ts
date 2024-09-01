import { Component } from '@angular/core';
import {MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatTable} from '@angular/material/table';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
     MatCardModule,
     MatCardHeader, 
     MatCardTitle, 
     MatCardContent, 
     MatTable
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  ELEMENT_DATA = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Mike', age: 35},
  ];
  displayedColumns: string[] = ['name', 'age'];
  dataSource = this.ELEMENT_DATA;



}
