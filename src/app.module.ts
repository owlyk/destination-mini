package src;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [FibonacciComponent]
})
export class AppModule { }