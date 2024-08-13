package src.app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }