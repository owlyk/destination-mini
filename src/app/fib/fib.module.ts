package src.app.fib;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibComponent } from './fib.component';

@NgModule({
  declarations: [FibComponent],
  imports: [CommonModule],
  exports: [FibComponent]
})
export class FibModule { }