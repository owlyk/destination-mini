package app.fibonacci;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  declarations: [FibonacciComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FibonacciComponent]
})
export class FibonacciModule { }