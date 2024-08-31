import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageService } from './service/image.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'openeyefrontend';
  constructor(private imageService : ImageService){
    this.getImage();
  }
  getImage(){
    this.imageService.getImage().subscribe(value=>{
      console.log(value);
    })
  }
}
