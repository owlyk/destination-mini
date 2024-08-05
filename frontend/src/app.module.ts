package src.app;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FibonacciService } from './fibonacci/fibonacci.service';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FibonacciService],
  bootstrap: [AppComponent]
})
export class AppModule { }