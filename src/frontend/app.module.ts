package src.frontend;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    FibonacciComponent
  ],
  bootstrap: [FibonacciComponent]
})
export class AppModule { }