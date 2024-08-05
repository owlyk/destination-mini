import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  declarations: [
    FibonacciComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // Add any necessary dependencies or providers here
  ]
})
export class FibonacciModule { }