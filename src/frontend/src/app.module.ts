@angular/core
@angular/platform-browser
@angular/platform-browser-dynamic
@angular/forms
@angular/common/http

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FibonacciComponent } from './fibonacci.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FibonacciService
  ],
  bootstrap: [FibonacciComponent]
})
export class AppModule { }