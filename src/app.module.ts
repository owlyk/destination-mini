package src.app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FibonacciService } from './fibonacci/fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FibonacciService],
  bootstrap: [FibonacciComponent]
})
export class AppModule { }