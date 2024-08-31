import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient } from '@angular/common/http'
import { ImageService } from './service/image.service';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClient,
    ImageService
  ],
  providers:[
    HttpClient,
    ImageService
  ]
})
export class AppModule { }
