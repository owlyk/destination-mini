package app.fibonacci;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  declarations: [FibonacciComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [FibonacciComponent]
})
export class FibonacciModule { }