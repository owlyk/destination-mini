package src.app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FibonacciService } from './fibonacci/fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FibonacciService
  ],
  bootstrap: [FibonacciComponent]
})
export class AppModule { }