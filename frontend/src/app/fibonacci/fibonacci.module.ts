package app.fibonacci;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  declarations: [FibonacciComponent],
  imports: [CommonModule, FormsModule],
  exports: [FibonacciComponent]
})
export class FibonacciModule { }