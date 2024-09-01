import { Component } from '@angular/core';
import {MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatTable} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardHeader, 
    MatCardTitle, 
    MatCardContent, 
    MatTable,
    MatTableModule
  ],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {
  ELEMENT_DATA = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Mike', age: 35},
  ];
  displayedColumns: string[] = ['name', 'age'];
  dataSource = this.ELEMENT_DATA;


}
