import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageService } from './service/image.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavContainer, MatSidenavContent, MatSidenav} from '@angular/material/sidenav';
import {MatNavList, MatListItem} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FormsModule,
    FooterComponent,
     DashboardComponent, 
     MatSidenavContainer, 
     MatSidenavContent, 
     MatSidenav,
     MatNavList,
     MatListItem,
     MatButtonModule, MatDividerModule, MatIconModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'openeyefrontend';
  events: string[] = [];
  opened: boolean = true;

  constructor(private imageService : ImageService){
    this.getImage();
  }
  getImage(){
    // this.imageService.getImage().subscribe(value=>{
    //   console.log(value);
    // })
  }
}
