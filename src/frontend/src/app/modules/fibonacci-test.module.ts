package FibonacciTestModule;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciTestComponent } from './fibonacci-test.component';
import { FibonacciTestService } from './fibonacci-test.service';

@NgModule({
  declarations: [
    FibonacciTestComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FibonacciTestService
  ]
})
export class FibonacciTestModule { }